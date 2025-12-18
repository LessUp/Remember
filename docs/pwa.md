# PWA / 离线策略

## 组成

- `manifest.webmanifest`：安装信息与图标
- `sw.js`：Service Worker 缓存策略

## 缓存策略（sw.js）

- **预缓存（install）**：
  - `./`、`./index.html`、`./app.js`、`./manifest.webmanifest`、`./assets/icon.svg`

- **Tailwind CDN 运行时缓存**：
  - 域名 `cdn.tailwindcss.com` 的 GET 请求会进入 `runtime-cdn-v1` 缓存
  - 网络优先，失败回退到缓存（保证离线时样式尽量不丢失）

- **导航请求**：network-first，失败回退到缓存（或 `index.html`）
- **其它同源 GET**：cache-first，未命中再请求并写入缓存

## 注意事项

- 若修改核心静态资源列表，建议同时评估是否需要更新缓存版本号（`CACHE_NAME`）。
- 离线能力受限于浏览器对 SW 的支持与首次访问时是否成功缓存资源。
