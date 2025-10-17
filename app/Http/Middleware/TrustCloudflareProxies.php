<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrustCloudflareProxies
{
    /**
     * 信任 Cloudflare 的代理 IP
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! app()->isLocal()) {
            // ! 使用这个配合 nginx 的 proxy_set_header 使用,不然无法获得真实IP
            if ($request->header('CF-Connecting-IP')) {
                $request->server->set('REMOTE_ADDR', $request->header('CF-Connecting-IP'));
            }
            // ! 确保为 https 协议,不然 Inertia 生成的链接没有 https
            $request->server->set('HTTPS', 'on');
            $request->server->set('SERVER_PORT', '443');
        }

        return $next($request);
    }
}
