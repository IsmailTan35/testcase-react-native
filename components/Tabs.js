import React from "react";

const Tabs = props => {
  const { onChange, selectedTab } = props;

  const handleChange = tabID => {
    onChange(tabID);
  };
  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <div
          className={`tab${selectedTab === 0 ? " active" : ""}`}
          onClick={() => {
            handleChange(0);
          }}
        >
          Waiting
        </div>
        <div
          className={`tab${selectedTab === 1 ? " active" : ""}`}
          onClick={() => {
            handleChange(1);
          }}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default Tabs;
