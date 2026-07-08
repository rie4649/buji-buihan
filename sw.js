// 最小限のサービスワーカー(PWAとしてインストール可能にするために必要)
self.addEventListener("install", () => {
self.skipWaiting();
});

self.addEventListener("activate", (event) => {
event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
// 通常のネットワーク通信をそのまま使う(キャッシュ処理は行わない)
});
