import React from "react";
import "../App.css";
import MainDash from "../components/MainDash/MainDash";
import RightSide from "../components/RigtSide/RightSide";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
