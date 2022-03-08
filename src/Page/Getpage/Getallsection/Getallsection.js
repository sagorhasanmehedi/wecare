import React from "react";
import Getgallery from "../Getgallery/Getgallery";
import Getcliniclocation from "../Getcliniclocation/Getcliniclocation";
import Getabout from "../Getabout/Getabout";
import "./Getallsection.css";

const Getallsection = () => {
  return (
    <div className="all_section">
      <Getgallery />
      <Getcliniclocation />
      <Getabout />
    </div>
  );
};

export default Getallsection;
