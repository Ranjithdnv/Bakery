self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "/logo192.png", // Replace with the path to your notification icon
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
