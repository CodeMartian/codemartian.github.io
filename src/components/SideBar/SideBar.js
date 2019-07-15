import React from "react";
import './sidebar.css';
import SideBarButton from "./SideBarButton/SideBarButton";

const SideBar = () => {
  return (
    <div id="sidebar" className="container">
      <SideBarButton name="Home" />
      <SideBarButton name="About" />
    </div>
  );
};

export default SideBar;
