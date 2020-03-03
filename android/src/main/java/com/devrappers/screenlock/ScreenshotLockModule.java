package com.devrappers.screenlock;

import android.app.Activity;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ScreenshotLockModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ScreenshotLockModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ScreenshotLock";
    }

    public void flagChange(final boolean mount){
        final Activity activity = getCurrentActivity();

        if(activity != null){
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                   if(mount){
                       activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
                   }
                   else{
                       activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                   }
                }
            });
        }
    }

    @ReactMethod
    public void screenLock() {
       flagChange(true);
    }

    @ReactMethod
    public void screenUnLock(){
       flagChange(false);
    }

}
