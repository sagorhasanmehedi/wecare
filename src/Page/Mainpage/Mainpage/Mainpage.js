import React from "react";
import About from "../About/About";
import Cliniclocation from "../Cliniclocation/Cliniclocation";
import Gallery from "../Gallery/Gallery";

const Mainpage = () => {
  return (
    <div>
      <Gallery />
      <Cliniclocation />
      <About />
    </div>
  );
};

export default Mainpage;
