import React from "react";
import "./Sidebar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Sidebar = () => {
  let navigate = useNavigate();

  // redirect to data get page
  const handelHistory = () => {
    navigate("/getpage");
  };

  // redirect to home page
  const handelBascHome = () => {
    navigate("/");
  };

  // handel popup alert
  const handelAlert = () => {
    console.log("helloo");
    swal("Sorry!", "We couldn't find it", "error");
  };

  return (
    <div className="side_bar">
      <div className="name_image">
        <img
          src="https://woodgram.com/wp-content/uploads/2020/08/Benedict-Cumberbatch.jpg"
          alt=""
          srcSet=""
          className="doctor_image"
        />
        <p className="doctor_name">Stephen Strange</p>
      </div>
      <div className="sidedar_menu">
        <GridViewIcon className="sidebar_icon" />
        <p onClick={handelHistory} className="sidedar_text">
          Dashbord
        </p>
      </div>
      <div className="sidedar_menu">
        <PeopleOutlineIcon className="sidebar_icon" />
        <p className="sidedar_text" onClick={handelAlert}>
          Doctor
        </p>
      </div>
      <div className="sidedar_menu menu_last">
        <PieChartOutlineIcon />
        <p className="sidedar_text menu_last" onClick={handelAlert}>
          Listing
        </p>
      </div>
      <p className="list_details menu_last" onClick={handelAlert}>
        Listing Details
      </p>
      <div className="retrun_button">
        <ExitToAppIcon className="sidebar_icon" />
        <p onClick={handelBascHome} className="retrun_button_text">
          Return to Doctors
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
