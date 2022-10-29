import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import CongIcon from "../../assets/congratulations.svg";

const CongratulationsPoppup = props => {
  const { btnClick } = props;
  return (
    <View style={{ position: "absolute", ...stlCongsPoppup.wrapper }}>
      <View style={stlCongsPoppup.container}>
        <View style={stlCongsPoppup.wrapper}>
          <View>
            <CongIcon width={120} height={40} />
          </View>
          <Text style={stlCongsPoppup.header}>Congratulations!</Text>
          <Text style={stlCongsPoppup.content}>
            {
              "You've earned points for your participation! Keep Up the great work!."
            }
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
    padding: 10,
    width: "100%",
    flexDirection: "column",
  },
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: { width: 4, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    borderRadius: 16,
    shadowColor: "#000",
    width: "100%",
  },
  header: {
    fontFamily: "QuicksandBold",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 28,
  },
  content: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "QuicksandMedium",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,
  },
  buttonWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
