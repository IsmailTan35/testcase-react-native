import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const EarnPoppup = props => {
  const { data, btnClick } = props;
  return (
    <View
      style={{
        position: "absolute",
        ...stlEarnPoppup.wrapper,
      }}
    >
      <View style={stlEarnPoppup.container}>
        <View style={stlEarnPoppup.wrapper}>
          <Image
            source={{ uri: data.image }}
            alt={data.title}
            style={stlEarnPoppup.icon}
          />
          <Text style={{ color: "#00CC00" }}>{data.point} Points</Text>
          <Text style={stlEarnPoppup.header}>{data.title}</Text>
          <Text style={stlEarnPoppup.content}>
            Lorem ipsum dolor sit amet consectetur
          </Text>
          <View
            className="poppup-button-wrapper"
            style={stlEarnPoppup.buttonWrapper}
          >
            <Text
              className="poppup-button"
              onPress={btnClick}
              style={stlEarnPoppup.button}
            >
              Earn points
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EarnPoppup;

const stlEarnPoppup = StyleSheet.create({
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
  icon: {
    width: 72,
    height: 72,
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
