import { StyleSheet, Text, View } from "react-native";
import IntroPoppup from "./poppup/IntroPoppup";
import IntroIcon from "../assets/intro.svg";

const Intro = props => {
  const { btnClick } = props;

  return (
    <View style={stlIntro.wrapper}>
      <View style={stlIntro.headerWrapper}>
        <View style={stlIntro.header}>
          <Text style={stlIntro.header1}>TestCase</Text>
          <Text style={stlIntro.header2}>APP</Text>
        </View>
        <Text style={stlIntro.subheader}>&quot;Pixel Perfect&quot;</Text>
      </View>
      <View style={stlIntro.iconWrapper}>
        <IntroIcon />
      </View>
      <IntroPoppup btnClick={btnClick} />
    </View>
  );
};

export default Intro;

const stlIntro = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 21,
  },

  header: {
    flexDirection: "row",
  },

  header1: {
    fontFamily: "MontserratExtraBold",
    fontSize: 32,
    lineHeight: 39,
  },

  header2: {
    fontFamily: "MontserratBlack",
    fontSize: 32,
    lineHeight: 39,
    marginLeft: 10,
  },

  subheader: {
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 17.07,
  },

  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 45,
  },

  icon: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 1,
  },
});
