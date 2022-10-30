import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { countDivider } from "../../services";

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
          <Text style={stlEarnPoppup.points}>
            {countDivider(data.point)} Points
          </Text>
          <Text style={stlEarnPoppup.header}>{data.title}</Text>
          <Text style={stlEarnPoppup.content}>{data.description}</Text>
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
    padding: 16,
    width: "100%",
    flexDirection: "column",
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
  icon: {
    width: 72,
    height: 72,
  },
  points: {
    fontFamily: "MontserratBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 8,
    color: "#00CC00",
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
