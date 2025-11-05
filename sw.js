self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./src/style.css","./src/index.js", "./image/logo.png"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    );
});

self.addEventListener("push", (event) => {
  const data = event.data?.json() || {};
  const title = data.title || "Nuova notifica!";
  const options = {
    body: data.body || "Hai un nuovo aggiornamento.",
    icon: "/image/logo.png",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});