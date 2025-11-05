if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service Worker registration");
      console.log(registration);
    })
    .catch((error) => {
      console.log("Service W registration failed");
      console.log(error);
    });
}

const btn = document.getElementById("notifyBtn");

// Richiede permesso all’utente
async function requestPermission() {
  if (!("Notification" in window)) {
    alert("⚠️ Il tuo browser non supporta le notifiche.");
    return false;
  }
  const permission = await Notification.requestPermission();
  return permission === "granted";
}

// Mostra una notifica locale
function showNotification() {
  const options = {
    body: "Questa è una notifica di test per Iphone 🔔",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827272.png",
    badge: "https://cdn-icons-png.flaticon.com/512/1827/1827272.png",
    tag: "test",
  };
  new Notification("🎉 Notifica funzionante!", options);
}

btn.addEventListener("click", async () => {
  const ok = await requestPermission();
  if (ok) showNotification();
});
