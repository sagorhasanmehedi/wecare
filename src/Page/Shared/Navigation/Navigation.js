import React from "react";
import "./Navigation.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const Navigation = () => {
  return (
    <div className="navbar">
      <div>
        <button className="nav_button">Post</button>
      </div>

      <div className="nav_icon_bar">
        <div className="nav_icon">
          <SearchIcon sx={{ bgcolor: "#ffffff" }} />
        </div>
        <div className="nav_icon">
          <NotificationsNoneIcon sx={{ bgcolor: "#ffffff" }} />
        </div>
        <div className="nav_icon">
          <PermIdentityOutlinedIcon sx={{ bgcolor: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
