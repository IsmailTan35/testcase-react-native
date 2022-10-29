import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Intro from "./components/Intro";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import store from "./store";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [notch, setNotch] = useState(0);
  const [fontsLoaded] = useFonts({
    MontserratThin: require("./assets/fonts/Montserrat/static/Montserrat-Thin.ttf"),
    MontserratExtraLight: require("./assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
    MontserratBlack: require("./assets/fonts/Montserrat/static/Montserrat-Black.ttf"),

    QuicksandLight: require("./assets/fonts/Quicksand/static/Quicksand-Light.ttf"),
    QuicksandRegular: require("./assets/fonts/Quicksand/static/Quicksand-Regular.ttf"),
    QuicksandMedium: require("./assets/fonts/Quicksand/static/Quicksand-Medium.ttf"),
    QuicksandSemiBold: require("./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand/static/Quicksand-Bold.ttf"),
  });
  const handleClick = () => {
    setShowIntro(false);
  };

  useLayoutEffect(() => {
    if (Platform.OS === "android") {
      setNotch(33);
    } else if (Platform.OS === "ios") {
      setNotch(30);
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: notch,
          backgroundColor: "#ffcc33",
        }}
      >
        <View style={styles.container} onLayout={onLayoutRootView}>
          {showIntro ? <Intro btnClick={handleClick} /> : <Main />}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc33",
  },
});
