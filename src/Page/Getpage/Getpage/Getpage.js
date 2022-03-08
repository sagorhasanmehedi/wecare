import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";

import Getallsection from "../Getallsection/Getallsection";
import "./Getpage.css";

const Getpage = () => {
  return (
    <div className="get_page">
      <Sidebar />
      <Getallsection />
    </div>
  );
};

export default Getpage;
