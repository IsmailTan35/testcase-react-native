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
      <View style={stlActions.index}>
        {selected !== null ||
          (!success && (
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
              </View>
            </>
          ))}
        {selected && <EarnPoppup data={selected} btnClick={handleEarnPoint} />}
        {success && <CongratulationsPoppup btnClick={handleCong} />}
      </View>
    </>
  );
};

export default Actions;

const stlActions = StyleSheet.create({
  index: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
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
    paddingHorizontal: 8,
  },
});

const stlAction = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 8,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  content: {
    marginLeft: 8,
    marginRight: 10,
    flex: 1,
  },
  title: {
    fontFamily: "QuicksandBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
    flex: 1,
  },
  description: {
    fontFamily: "QuicksandMedium",
    fontsize: 12,
    lineHeight: 16,
    color: "#999999",
    maxWidth: "100%",
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
