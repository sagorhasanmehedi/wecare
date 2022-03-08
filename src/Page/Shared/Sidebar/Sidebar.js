import React from "react";
import "./Sidebar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="side_bar">
      <div className="name_image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YCM1uKygFFe3yBvei650KEXyelXZCuOgaw&usqp=CAU"
          alt=""
          srcSet=""
          className="doctor_image"
        />
        <p className="doctor_name">Stephen Strange</p>
      </div>
      <div className="sidedar_menu">
        <GridViewIcon className="sidebar_icon" />
        <p className="sidedar_text">Dashbord</p>
      </div>
      <div className="sidedar_menu">
        <PeopleOutlineIcon className="sidebar_icon" />
        <p className="sidedar_text">Listing</p>
      </div>
      <div className="sidedar_menu menu_last">
        <PieChartOutlineIcon />
        <p className="sidedar_text menu_last">Listing</p>
      </div>
      <p className="list_details menu_last">Listing Details</p>
      <div className="retrun_button">
        <ExitToAppIcon className="sidebar_icon" />
        <p className="retrun_button_text">Return to Doctors</p>
      </div>
    </div>
  );
};

export default Sidebar;
