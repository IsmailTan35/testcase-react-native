import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { countDivider } from "../services";

const Completed = props => {
  const { data } = props;

  const points = useSelector(item => item.tasks.items);

  return (
    <View
      style={{
        background: "#F5F5F5",
        flex: "1 1",
        padding: "10px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Text className="completed-items-title">Completed actions</Text>
      <View className="completed-items-wrapper">
        <View className="completed-items">
          {data.length > 0 &&
            data
              .filter(item => points.includes(item.id))
              .map((item, index) => {
                return (
                  <View key={index} className="completed-item-wrapper">
                    <View className="completed-item">
                      <View className="completed-item-container">
                        <View className="completed-item-content">
                          <Text className="completed-item-title">
                            {item.title}
                          </Text>
                        </View>
                      </View>
                      <Text className="completed-item-point">
                        +{countDivider(item.point)}
                      </Text>
                    </View>
                  </View>
                );
              })}
        </View>
      </View>
    </View>
  );
};

export default Completed;
