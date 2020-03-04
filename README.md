# react-native-screenshot-lock

## Getting started

`$ npm install react-native-screenshot-lock --save`

### Mostly automatic installation

`$ react-native link react-native-screenshot-lock`

#### Android Manual
1. Append the following lines to `android/settings.gradle`
```
include ':react-native-screenshot-lock'
project(':react-native-screenshot-lock').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screenshot-lock/android')
```
2. Insert the following lines inside the dependencies block in `andorid/app/build.gradle`
```
implementation project(':react-native-screenshot-lock')
```

#### Ios Manual
1. Update the AppDelegate.m file to include the following
```
#import <ScreenshotLock.h>

.....

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{   
    ...

    ScreenshotLock* screenshotLock = [[ScreenshotLock alloc] init];
    [screenshotLock setupAndListen:rootView.bridge];
}
```

## Usage 1
```javascript
import { useEffect } from "react";
import {register, unregister} from 'react-native-screenshot-lock';

// ios Callback / android X
export default () => {
 useEffect(() => {
    // param callback
    // register : screenshotLock, unregister: screenshotUnLock
    register(() => {});
    return () => unregister();
  }, []);
}
```

## Usage 2
```javascript
import React from "react";
import { Text, View } from "react-native";
import useLockScreenShot from 'react-native-screenshot-lock';
import { useEffect } from "react";

export default () => {
    useLockScreenShot();
    return (
        <View>
            <Text>React-Native-Screenshot-lock</Text>
        </View>
    );
}
```