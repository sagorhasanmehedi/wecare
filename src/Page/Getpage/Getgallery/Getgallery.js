import React, { useEffect, useState } from "react";
import "./Getgallery.css";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import axios from "axios";

const Getgallery = () => {
  const [Image, setImage] = useState();

  // get doctor image
  useEffect(() => {
    axios
      .get("https://hidden-forest-55120.herokuapp.com/clinicinfo")
      .then((res) => {
        // handle success
        setImage(res.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(Image);

  return (
    <div className="gallery">
      <p className="main_section_heading">Gallery</p>
      <div className="image">
        <p className="main_section_subtitle">Main image</p>

        <div className="image_icon">
          <form>
            {Image ? (
              <img
                className="preview_image"
                src={"data:image/jpeg;base64," + Image?.image}
                alt=""
                srcSet=""
                style={{ objectFit: "cover" }}
              />
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="preview_button"
              ></button>
            )}
          </form>

          <CloseIcon className="image_clos_icon gallery_image_icon" />
        </div>
      </div>
      <div className="image">
        <p className="main_section_subtitle gallery_heading_subtitel">
          Gallery images
        </p>
        <div className="image_icon">
          <form>
            {Image ? (
              <img
                className="gallery_image_preview"
                src={"data:image/jpeg;base64," + Image?.gallery_image}
                alt=""
                srcSet=""
              />
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="gallery_image_button"
              >
                <CollectionsOutlinedIcon className="gallery_icon" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Getgallery;
