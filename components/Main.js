import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Actions from "./Actions";
import Completed from "./Completed";
// import Tabs from "./Tabs";
import testdata from "../data/test.json";
import axios from "axios";
import { View } from "react-native";

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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      {/* <Tabs onChange={setSelectedTab} selectedTab={selectedTab} /> */}
      {selectedTab === 0 ? <Actions data={data} /> : <Completed data={data} />}
    </View>
  );
};

export default Main;
