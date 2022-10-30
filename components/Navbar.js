import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { countDivider } from "../services";

const Navbar = () => {
  const points = useSelector(item => item.points.item);
  return (
    <View style={stlNavbar.wrapper}>
      <View style={stlNavbar.container}>
        <View style={stlNavbar.header}>
          <Text style={stlNavbar.header1}>TestCase</Text>
          <Text style={stlNavbar.header2}>APP</Text>
        </View>
        <View style={stlNavbar.pointsWrapper}>
          <Text style={stlNavbar.pointsText}>Points:</Text>
          <Text style={stlNavbar.points}>{countDivider(points)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const stlNavbar = StyleSheet.create({
  wrapper: {
    padding: 16,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "auto",
  },
  header1: {
    fontFamily: "MontserratBold",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 24,
  },
  header2: {
    marginLeft: 5,
    fontFamily: "MontserratBlack",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 24,
  },

  pointsWrapper: {
    backgroundColor: "black",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
  pointsText: {
    fontFamily: "QuicksandMedium",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,
    color: "white",
  },
  points: {
    fontFamily: "QuicksandBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 20,
    color: "white",
    marginLeft: 5,
  },
});
