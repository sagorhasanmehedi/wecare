import React, { useEffect, useState } from "react";
import "./Getgallery.css";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import axios from "axios";

const Getgallery = () => {
  const [doctorImage, setDoctorImage] = useState();

  // get doctor image
  useEffect(() => {
    axios
      .get("http://localhost:7000/clinicinfo")
      .then((res) => {
        // handle success
        setDoctorImage(res.data[0].image);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="gallery">
      <p className="main_section_heading">Gallery</p>
      <div className="image">
        <p className="main_section_subtitle">Main image</p>

        <div className="image_icon">
          <form>
            {doctorImage ? (
              <img
                className="preview_image"
                src={"data:image/jpeg;base64," + doctorImage}
                alt=""
                srcSet=""
                style={{ objectFit: "cover" }}
              />
            ) : (
              <button className="preview_button"></button>
            )}
          </form>

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

export default Getgallery;
