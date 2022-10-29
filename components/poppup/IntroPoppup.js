import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IntroPoppup = props => {
  const { btnClick } = props;
  return (
    <View style={stlIntroPoppup.wrapper}>
      <View style={stlIntroPoppup.container}>
        <View style={stlIntroPoppup.wrapper}>
          <Text style={stlIntroPoppup.header}>
            Welcome to the TestCase APP!
          </Text>
          <Text className="poppup-content" style={stlIntroPoppup.content}>
            We created this exercise to gain insights about your development
            skills.
          </Text>
          <View style={stlIntroPoppup.buttonWrapper}>
            <Text
              style={stlIntroPoppup.button}
              onPress={() => {
                btnClick();
              }}
            >
              Start
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroPoppup;

const stlIntroPoppup = StyleSheet.create({
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
