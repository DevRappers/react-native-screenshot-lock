//
// ScreenshotLock.m
//
// Create by Devrappers on 3/3/2020
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface ScreenshotLock : RCTEventEmitter <RCTBridgeModule>

- (void)setupAndListen:(RCTBridge*)bridge;
- (void)screenshotDetected:(NSNotification*)notification;

@end
