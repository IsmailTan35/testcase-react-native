import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Actions from "./Actions";
import Completed from "./Completed";
// import Tabs from "./Tabs";
import testdata from "../data/test.json";
import axios from "axios";
import { View, StyleSheet, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
const Main = () => {
  const [data, setData] = useState(testdata.data);
  const [selectedTab, setSelectedTab] = useState(0);

  async function getActions() {
    try {
      const res = await axios.get(
        "https://cdn.mallconomy.com/testcase/actions.json"
      );
      // setData(res);
    } catch (error) {}
  }

  useEffect(() => {
    getActions();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <View style={styles.container}>
        <SwiperFlatList index={0}>
          <View style={styles.child}>
            <Actions data={data} />
          </View>
          <View style={styles.child}>
            <Completed data={data} />
          </View>
        </SwiperFlatList>
      </View>
    </View>
  );
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  child: { width, justifyContent: "center" },
});
export default Main;
