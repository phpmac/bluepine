# ! 1. 使用官方的 PHP 8.4 FPM Alpine 基础镜像
FROM php:8.4-fpm-alpine AS php

# 更新包管理器并安装必要的软件
RUN apk update && apk add --no-cache \
    nginx \
    supervisor \
    curl \
    bash \
    htop \
    vim \
    autoconf \
    gcc \
    g++ \
    make \
    gmp-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    icu-dev \
    postgresql-dev

# ! 只有用这种安装方式，才能安装 redis 扩展
RUN pecl install redis && docker-php-ext-enable redis

# ! 只有用这种安装方式，才能安装 gd 扩展
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gmp zip gd bcmath pcntl pdo_mysql exif opcache pdo_pgsql intl

# 安装 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 设置工作目录
WORKDIR /app

# 复制应用程序代码（请确保将代码添加到 Docker 上下文中）
COPY --chown=www-data:www-data . /app

# 复制 Nginx 和 Supervisor 配置文件
COPY ./conf/http.conf /etc/nginx/http.d/default.conf
COPY ./supervisor /etc/supervisor.d

# 安装应用程序依赖
RUN composer install --no-interaction --optimize-autoloader --no-progress --no-suggest --prefer-dist


# ! 2. 编译前端
FROM oven/bun AS node

# ! 安装 Python 和构建工具用于编译原生模块
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=php /app /app
RUN bun i
RUN bun run build



# ! 3. 最终镜像
FROM php AS final
# 复制构建后的 Node.js 应用程序
COPY --from=node /app/public /app/public



# ! 4. 正式缓存
# RUN php artisan config:cache
# RUN php artisan route:cache
# RUN php artisan event:cache

# ! 5. storage:link 否则会404
RUN php artisan storage:link


# ! 暴露端口
EXPOSE 80 8080

# ! 安全策略1: 禁用文件上传,必须的,因为没有禁用任何函数
RUN echo "file_uploads = Off" > /usr/local/etc/php/conf.d/uploads.ini \
    && echo "upload_max_filesize = 0" >> /usr/local/etc/php/conf.d/uploads.ini

# ! 禁用危险函数
RUN echo "disable_functions = passthru,exec,system,putenv,chroot,chgrp,chown,shell_exec,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,imap_open,apache_setenv,register_argc_argv" > /usr/local/etc/php/conf.d/disable_functions.ini

# ! 安全策略3: 防跨站攻击
RUN echo "open_basedir=/app/:/tmp/" > /app/public/.user.ini && chattr +i /app/public/.user.ini


# ! 777权限
RUN chmod -R 777 /app/storage /app/bootstrap

# ! 启动所有服务
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]