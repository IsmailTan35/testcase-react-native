import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pointsActions, tasksActions } from "../store";
import CongratulationsPoppup from "./poppup/CongratulationsPoppup";
import EarnPoppup from "./poppup/EarnPoppup";
import { countDivider } from "../services";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

const Action = ({ data, handleClick }) => {
  return (
    <>
      <TouchableHighlight
        onPress={handleClick}
        style={stlAction.wrapper}
        underlayColor="#fff"
      >
        <View style={stlAction.action}>
          <View style={stlAction.container}>
            <View style={stlAction.iconWrapper}>
              <Image style={stlAction.icon} source={{ uri: data.image }} />
            </View>
            <View style={stlAction.content}>
              <Text style={stlAction.title}>{data.title}</Text>
              <Text style={stlAction.description}>{data.description}</Text>
            </View>
          </View>
          <Text style={stlAction.point}>+{countDivider(data.point)}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

const Actions = props => {
  const { data } = props;
  const dispatch = useDispatch();

  const points = useSelector(item => item.tasks.items);

  const [selected, setSelected] = useState(null);
  const [success, setSucces] = useState(false);

  const handleSelect = action => {
    setSelected(action);
  };

  const handleEarnPoint = () => {
    dispatch(tasksActions.update(selected.id));
    dispatch(pointsActions.update(selected.point));

    setSucces(true);
    setSelected(null);
  };

  const handleCong = () => {
    setSucces(false);
  };

  return (
    <>
      <View style={stlActions.wrapper}>
        <Text style={stlActions.title}>Actions to be completed</Text>
        <ScrollView style={stlActions.container}>
          {data.length > 0 &&
            data
              .filter(item => !points.includes(item.id))
              .map((action, index) => {
                return (
                  <Action
                    data={action}
                    handleClick={() => {
                      handleSelect(action);
                    }}
                    key={index}
                  />
                );
              })}
        </ScrollView>
        {selected && <EarnPoppup data={selected} btnClick={handleEarnPoint} />}
        {success && <CongratulationsPoppup btnClick={handleCong} />}
      </View>
    </>
  );
};

export default Actions;

const stlActions = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
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
  },
  container: {
    height: "100%",
    width: "100%",
  },
});

const stlAction = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
  },
  description: {
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
