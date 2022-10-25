import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sideBar = useSelector((state) => state.sideBar.value);

  console.log(sideBar);
  return (
    <div className="sidebar" style={{ left: `${sideBar ? 0 : -194}` }}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
