import { StyleSheet, Text, View, Image } from "react-native";
import IntroPoppup from "./poppup/IntroPoppup";

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
        <Image
          source={{
            uri: "https://www.nicepng.com/png/full/870-8707419_755-x-680-11-web-design-website-clip.png",
          }}
          style={stlIntro.icon}
        />
      </View>
      <View></View>
      <IntroPoppup btnClick={btnClick} />
    </View>
  );
};

export default Intro;

const stlIntro = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffcc33",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  headerWrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
  },

  icon: {
    width: "100%",
    height: 350,
    // flex: 1,
  },
});
