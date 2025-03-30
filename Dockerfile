# 后端
FROM serversideup/php:8.2-fpm-nginx-v2.2.1 AS php

# 改为上海时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 基础更新
RUN apt -y update --fix-missing

# PHP扩展
RUN apt -y install imagemagick libmagickwand-dev
RUN apt -y install php8.2-gmp php8.2-redis php8.2-imagick

# 复制文件并设置权限
COPY --chown=webuser:webgroup . /var/www/html

# 安装所有依赖
RUN composer install --no-dev --no-interaction --optimize-autoloader --no-progress --no-suggest --prefer-dist

# 放置在最后，避免无效
RUN chmod -R 777 /var/www/html/storage /var/www/html/bootstrap

# 安装 supervisor
RUN apt -y update && apt -y install supervisor

# 复制 supervisor 配置文件
COPY supervisor /etc/supervisor/conf.d

# 运行 supervisor
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]

# 编译之前使用 .env.example 作为 .env 不然编译会出问题会失败
COPY .env.example .env

# 禁止开放PHP文件上传
# RUN sed -i 's/file_uploads = On/file_uploads = Off/g' /etc/php/8.2/cli/php.ini
# RUN sed -i 's/file_uploads = On/file_uploads = Off/g' /etc/php/8.2/fpm/php.ini


# ! 2. 编译前端
FROM oven/bun AS node
WORKDIR /app
COPY --from=php /app /app
RUN bun i
RUN bun run build


# 最终镜像
FROM php AS final
# 复制构建后的 Node.js 应用程序
COPY --from=node /app/public /var/www/html/public

# Websocket中需要特殊设置 ulimit -n
RUN ulimit -n
COPY conf/limits.conf /etc/security/limits.conf

# 设置为只读 /var/www/html/dcat-admin-extensions
RUN chmod -R 555 /var/www/html/dcat-admin-extensions

# 映射端口
EXPOSE 80 6001
