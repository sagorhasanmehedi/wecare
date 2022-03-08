import React from "react";
import About from "../About/About";
import Cliniclocation from "../Cliniclocation/Cliniclocation";
import Gallery from "../Gallery/Gallery";
import "./Allsection.css";

const Allsection = () => {
  return (
    <div className="all_section">
      <Gallery />
      <Cliniclocation />
      <About />
    </div>
  );
};

export default Allsection;
