import { NativeModules, NativeEventEmitter, Platform, Alert } from 'react-native';

const { ScreenshotLock } = NativeModules;

const SCREENSHOT_EVENT = 'ScreenshotTaken';

const eventEmitter = new NativeEventEmitter(ScreenshotLock);

export const register = () => {
    eventEmitter.addListener(
        SCREENSHOT_EVENT,
        () => {
            Alert.alert(
                'Contenu protégé !',
                "Ce contenu est protégé par les droits d'auteur. Tout partage en dehors d'un usage personnel est strictement interdit."
            );
        },
        {}
    );
    if (Platform.OS === 'android') {
        ScreenshotLock.screenLock();
    }
};

export const unregister = () => {
    eventEmitter.removeAllListeners(SCREENSHOT_EVENT);
    if (Platform.OS === 'android') {
        ScreenshotLock.screenUnLock();
    }
};
