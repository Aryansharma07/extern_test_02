package com.externtest;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
// import com.google.firebase.FirebaseApp;
// import com.google.firebase.FirebaseOptions;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ExternTest";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      //       FirebaseOptions options = new FirebaseOptions.Builder()
      //     .setApplicationId("1:525402911516:android:fd2a974cb6bfd06f4c00d9")
      //     .setApiKey("AIzaSyDAmtOsHURWDXecjrA6oe0y245AU_l7oEw")
      //     .setDatabaseUrl("https://demotask-2a121-default-rtdb.firebaseio.com/")
      //     .build();

      // FirebaseApp.initializeApp(getContext(), options);
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
}
