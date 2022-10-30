import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { countDivider } from "../services";

const Completed = props => {
  const { data } = props;

  const points = useSelector(item => item.tasks.items);

  return (
    <View style={stlCompletedItems.wrapper}>
      <Text style={stlCompletedItems.title}>Completed actions</Text>
      <ScrollView style={stlCompletedItems.container}>
        {data.length > 0 &&
          data
            .filter(item => points.includes(item.id))
            .map((item, index) => {
              return (
                <View key={index} style={stlCompletedItem.wrapper}>
                  <View style={stlCompletedItem.compledtedItem}>
                    <View style={stlCompletedItem.container}>
                      <View style={stlCompletedItem.content}>
                        <Text style={stlCompletedItem.title}>{item.title}</Text>
                      </View>
                    </View>
                    <Text style={stlCompletedItem.point}>
                      +{countDivider(item.point)}
                    </Text>
                  </View>
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default Completed;

const stlCompletedItems = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 0,
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    flex: 1,
  },
  title: {
    fontFamily: "QuicksandBold",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    width: "100%",
    marginTop: 24,
    paddingHorizontal: 16,
  },
  container: {
    height: "100%",
    width: "100%",
    marginTop: 16,
  },
});

const stlCompletedItem = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 17,
    marginVertical: 0.5,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  compledtedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "QuicksandMedium",
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
  },
  content: {
    fontFamily: "QuicksandMedium",
    fontsize: 12,
    lineHeight: 16,
    color: "#999999",
  },
  iconWrapper: {
    justifyContent: "center",
    width: 36,
    height: 36,
  },
  icon: { width: 36, height: 36 },

  point: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "right",
    color: "#00cc00",
  },
});
