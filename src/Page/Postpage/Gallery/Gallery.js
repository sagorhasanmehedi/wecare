import React from "react";
import "./Gallery.css";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const Gallery = () => {
  return (
    <div className="gallery">
      <p className="main_section_heading">Gallery</p>
      <div className="image">
        <p className="main_section_subtitle">Main image</p>
        <div className="image_icon">
          <div className="image_circle"></div>
          <CloseIcon className="image_clos_icon" />
        </div>
      </div>
      <div className="image">
        <p className="main_section_subtitle gallery_heading_subtitel">
          Gallery images
        </p>
        <div className="image_icon">
          <CollectionsOutlinedIcon className="gallery_icon" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
