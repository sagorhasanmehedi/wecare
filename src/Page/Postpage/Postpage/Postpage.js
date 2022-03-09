import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Finalpostoage from "../Finalpostpage/Finalpostoage";
import "./Postpage.css";

const Postpage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="post_page">
        <Sidebar />
        <Finalpostoage />
      </div>
    </React.Fragment>
  );
};

export default Postpage;
