import React, { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import Routes from "./src/routes";
import Toast from "react-native-toast-message";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const notificationHandler = useCallback((response: Notifications.NotificationResponse) => {
    console.log("responseListener", response);
  }, []);

  useEffect(() => {
    registerForPushNotifications();
    schedulePushNotification();
  }, []);

  useEffect(() => {
    const listener = Notifications.addNotificationResponseReceivedListener(notificationHandler);
    return () => Notifications.removeNotificationSubscription(listener);
  }, [notificationHandler]);

  return (
    <>
      <Routes />
      <Toast />
    </>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Med Remind 💊",
      body: "Nunca esqueça de tomar seu remédio na hora certa!",
      data: { data: "goes here" },
    },
    trigger: { seconds: 1, repeats: false },
  });
}

async function registerForPushNotifications() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();

      return status == "granted";
    }

    return false;
  }

  return true;
}
