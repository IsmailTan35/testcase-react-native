import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import CongIcon from "../../assets/congratulations.svg";

const CongratulationsPoppup = props => {
  const { btnClick } = props;
  return (
    <View style={{ position: "absolute", ...stlCongsPoppup.wrapper }}>
      <View style={stlCongsPoppup.container}>
        <View style={stlCongsPoppup.wrapper}>
          <View style={stlCongsPoppup.icon}>
            <CongIcon />
          </View>
          <Text style={stlCongsPoppup.header}>Congratulations!</Text>
          <Text style={stlCongsPoppup.content}>
            You've earned points for your participation! Keep Up the great work!
          </Text>
          <View style={stlCongsPoppup.buttonWrapper}>
            <Text onPress={btnClick} style={stlCongsPoppup.button}>
              Close
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CongratulationsPoppup;

const stlCongsPoppup = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    flexDirection: "column",
  },
  icon: {
    marginTop: 12,
  },
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  header: {
    fontFamily: "QuicksandBold",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 28,
    marginTop: 17.45,
  },
  content: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "QuicksandMedium",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,
  },
  buttonWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  button: {
    textAlign: "center",
    paddingHorizontal: 7,
    paddingVertical: 16,
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: 56,
    borderRadius: 99,

    fontFamily: "QuicksandBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,
  },
});
