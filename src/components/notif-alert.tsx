"use client";

import { useEffect } from "react";

const NotifAlert = () => {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Welcome to the Emergency Alert System", {
            body: "Stay safe and prepared",
          });
        }
      });
    }
  }, []);

  return null;
};

export default NotifAlert;
