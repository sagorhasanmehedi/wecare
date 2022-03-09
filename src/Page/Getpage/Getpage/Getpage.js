import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Getallsection from "../Getallsection/Getallsection";
import "./Getpage.css";

const Getpage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="get_page">
        <Sidebar />
        <Getallsection />
      </div>
    </React.Fragment>
  );
};

export default Getpage;
