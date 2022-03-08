import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Allsection from "../Allsection/Allsection";
import "./Postpage.css";

const Postpage = () => {
  return (
    <div className="post_page">
      <Sidebar />
      <Allsection />
    </div>
  );
};

export default Postpage;
