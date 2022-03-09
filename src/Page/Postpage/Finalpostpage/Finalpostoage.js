import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import RichTextEditor from "react-rte";
import "./Finalpostpage.css";
import axios from "axios";
import swal from "sweetalert";
const formdata = new FormData();

const Finalpostoage = (props) => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  // const [galleryPreview, setgalleryPreview] = useState();
  const [galleryImage, setGalleryImage] = useState();

  // clinic infiormation
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCoutry] = useState("");
  const [landline, setLandline] = useState("");
  const [landline2, setLandline2] = useState("");
  const [email, setEmail] = useState("");

  //   send data to database
  const handelData = () => {
    formdata.append("image", image);
    formdata.append("clinic_name", name);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("zip", zip);
    formdata.append("city", city);
    formdata.append("country", country);
    formdata.append("landline", landline);
    formdata.append("landline2", landline2);
    formdata.append("email", email);

    if (!image) {
      swal("Warning", "Please select at least one image", "error");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:7000/clinic",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (res) {
        if (res.data.acknowledged === true) {
          swal("Congratulation", "Your submission hass been sent", "success");
          return;
        }
      })
      .catch(function (error) {
        swal("Error!", `${error}`, "error");
        return;
      });
  };

  //   rich text editor
  const onChange = (value) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value.toString("html"));
    }
  };

  // image preview
  const imageref = useRef();
  const galleryImageRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [image]);

  // handel input image
  const handelInputImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  console.log(galleryImage);

  const galleryImageInput = (e) => {
    if (e.target.files) {
      const imagearray = Array.from(e.target.files).map((files) =>
        URL.createObjectURL(files)
      );
      setGalleryImage((prevImages) => prevImages.concat(imagearray));
      Array.form(e.target.files).map((file) => URL.revokeObjectURL(file));

      console.log(imagearray);
    }
  };

  // handel preview button
  const handelPreviewButton = (e) => {
    e.preventDefault();
    imageref.current.click();
  };

  const handelGalleryPreview = (e) => {
    e.preventDefault();
    galleryImageRef.current.click();
  };

  const renderGalleryImage = (sourse) => {
    return sourse?.map((image) => {
      return <img src={image} alt="" srcset="" key={image} />;
    });
  };

  return (
    <div className="all_section">
      <div className="gallery">
        <p className="main_section_heading">Gallery</p>
        <div className="image">
          <p className="main_section_subtitle">Main image</p>
          <div className="image_icon">
            <form>
              {preview ? (
                <img
                  className="preview_image"
                  src={preview}
                  alt=""
                  srcSet=""
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <button
                  onClick={handelPreviewButton}
                  className="preview_button"
                ></button>
              )}

              <input
                className="preview_input"
                type="file"
                accept="image/*"
                ref={imageref}
                onChange={handelInputImage}
              />
            </form>

            <CloseIcon
              onClick={() => setImage(null)}
              className="image_clos_icon"
            />
          </div>
        </div>
        <div className="image">
          <p className="main_section_subtitle gallery_heading_subtitel">
            Gallery images
          </p>
          <div className="image_icon">
            <form>
              <button
                onClick={handelGalleryPreview}
                className="gallery_image_button"
              >
                <CollectionsOutlinedIcon className="gallery_icon" />
              </button>
              <input
                className="preview_input"
                type="file"
                multiple
                accept="image/*"
                ref={galleryImageRef}
                onChange={galleryImageInput}
              />
            </form>
            {renderGalleryImage(galleryImage)}
          </div>
        </div>
      </div>

      {/* clinic location section */}
      <div className="clinic_location">
        <h1 className="main_section_heading">Clinic Locations</h1>
        <p className="clinic_location_subtitle">Location 1</p>

        {/* clinic location input */}
        <div className="clinic_form">
          <div>
            <p className="clinic_info">Clinic Name</p>
            <input
              className="clinic_input name_input_width"
              onBlur={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input_line">
            <div>
              <p className="clinic_info">Address</p>
              <input
                className="clinic_input name_input_width"
                onBlur={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <p className="clinic_info">Address 2nd line</p>
              <input
                className="clinic_input name_input_width"
                onBlur={(e) => setAddress2(e.target.value)}
              />
            </div>
          </div>
          <div className="input_line">
            <div>
              <p className="clinic_info">Zip_code</p>
              <input
                className="clinic_input zip_input_width"
                onBlur={(e) => setZip(e.target.value)}
              />
            </div>

            <div>
              <p className="clinic_info">City</p>
              <input
                className="clinic_input city_input_width"
                onBlur={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <p className="clinic_info">Country</p>
              <input
                className="clinic_input city_input_width"
                onBlur={(e) => setCoutry(e.target.value)}
              />
            </div>
          </div>
          <div className="input_line">
            <div>
              <p className="clinic_info">Landline</p>
              <input
                className="clinic_input city_input_width"
                onBlur={(e) => setLandline(e.target.value)}
              />
            </div>
            <div>
              <p className="clinic_info">Second Landline</p>
              <input
                className="clinic_input city_input_width"
                onBlur={(e) => setLandline2(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="clinic_info">Email</p>
            <input
              className="clinic_input name_input_width"
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* clinic fiture checkbox */}
        <p className="clinic_checkbox">Clinic Features</p>
        <div className="checkbox_button">
          <div className="clinic_fiture">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="anime"
                name="hobby"
              />
              <label className="form-check-label" htmlFor="anime">
                Disabled Access
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="anime"
                name="hobby"
              />
              <label className="form-check-label" htmlFor="anime">
                Cash payments
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="anime"
                name="hobby"
              />
              <label className="form-check-label" htmlFor="anime">
                Credit card payments
              </label>
            </div>
          </div>

          <button onClick={handelData} className="form_button">
            Submit
          </button>
        </div>
      </div>

      {/* about section */}
      <div className="about">
        <p className="about_heading">About</p>

        <RichTextEditor
          className="about_text_editor"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Finalpostoage;
