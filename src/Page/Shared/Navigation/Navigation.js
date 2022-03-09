import React, { useState } from "react";
import "./Navigation.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  // handel alert popup
  const handelAlert = () => {
    swal("Sorry!", "We couldn't find it", "error");
  };

  // handel onclic redirect
  const naviget = useNavigate();
  const handelRedirect = () => {
    naviget("/");
  };

  return (
    <>
      <div className="navbar">
        <div>
          <img
            src="http://ary-themes.com/html/bold_touch/medicoz/images/logo.png"
            alt=""
            srcSet=""
            className="navigation_logo"
            onClick={handelRedirect}
          />
        </div>

        <div className="nav_icon_bar">
          <div className="nav_icon">
            <SearchIcon onClick={handelAlert} sx={{ bgcolor: "#ffffff" }} />
          </div>
          <div className="nav_icon">
            <NotificationsNoneIcon
              onClick={handelAlert}
              sx={{ bgcolor: "#ffffff" }}
            />
          </div>
          <div className="nav_icon">
            <PermIdentityOutlinedIcon
              onClick={handelAlert}
              sx={{ bgcolor: "#ffffff" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
