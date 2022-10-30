import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import Intro from "./components/Intro";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import store from "./store";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [notch, setNotch] = useState(0);
  const [fontsLoaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("./assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
    MontserratBlack: require("./assets/fonts/Montserrat/static/Montserrat-Black.ttf"),

    QuicksandMedium: require("./assets/fonts/Quicksand/static/Quicksand-Medium.ttf"),
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
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ paddingTop: notch, ...styles.wrapper }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          {showIntro ? <Intro btnClick={handleClick} /> : <Main />}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#ffcc33" },
  container: {
    flex: 1,
    backgroundColor: "#ffcc33",
  },
});
