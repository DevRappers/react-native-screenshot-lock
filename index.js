import { useEffect } from "react";
import {
  NativeModules,
  NativeEventEmitter,
  Platform,
  Alert
} from "react-native";

const { ScreenshotLock } = NativeModules;

const SCREENSHOT_EVENT = "ScreenshotTaken";
const DEFAULT_TITLE = "Contenu protégé !";
const DEFAULT_MESSAGE =
  "Ce contenu est protégé par les droits d'auteur. Tout partage en dehors d'un usage personnel est strictement interdit.";

const eventEmitter = new NativeEventEmitter(ScreenshotLock);

export const register = (title, message) => {
  eventEmitter.addListener(
    SCREENSHOT_EVENT,
    () => {
      Alert.alert(title, message);
    },
    {}
  );
  if (Platform.OS === "android") {
    ScreenshotLock.screenLock();
  }
};

export const unregister = () => {
  eventEmitter.removeAllListeners(SCREENSHOT_EVENT);
  if (Platform.OS === "android") {
    ScreenshotLock.screenUnLock();
  }
};

const useLockScreenShot = ({
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE
}) => {
  useEffect(() => {
    register(title, message);
    return () => unregister();
  }, []);
};

export default useLockScreenShot;
