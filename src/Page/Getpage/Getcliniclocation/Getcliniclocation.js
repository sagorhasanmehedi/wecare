import React, { useEffect, useState } from "react";
import "./Getcliniclocation.css";
import axios from "axios";

const Getcliniclocation = () => {
  const [clinicInfo, setClinicInfo] = useState([]);

  // get clinic information form server
  useEffect(() => {
    axios
      .get("http://localhost:7000/clinicinfo")
      .then((response) => {
        // handle success
        setClinicInfo(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="clinic_location">
      <h1 className="main_section_heading">Clinic Locations</h1>
      <p className="clinic_location_subtitle">Location 1</p>

      {/* clinic location input */}
      <form>
        <div>
          <p className="clinic_info">Clinic Name</p>
          <input
            className="clinic_input name_input_width"
            defaultValue={clinicInfo?.name}
            readOnly
          />
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Address</p>
            <input
              className="clinic_input name_input_width"
              defaultValue={clinicInfo?.address}
              readOnly
            />
          </div>
          <div>
            <p className="clinic_info">Address 2nd line</p>
            <input
              className="clinic_input name_input_width"
              defaultValue={clinicInfo?.address2}
              readOnly
            />
          </div>
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Zip_code</p>
            <input
              className="clinic_input zip_input_width"
              defaultValue={clinicInfo?.zip}
              readOnly
            />
          </div>

          <div>
            <p className="clinic_info">City</p>
            <input
              className="clinic_input city_input_width"
              defaultValue={clinicInfo?.city}
              readOnly
            />
          </div>
          <div>
            <p className="clinic_info">Country</p>
            <input
              className="clinic_input city_input_width"
              defaultValue={clinicInfo?.country}
              readOnly
            />
          </div>
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Landline</p>
            <input
              className="clinic_input city_input_width"
              defaultValue={clinicInfo?.landline}
              readOnly
            />
          </div>
          <div>
            <p className="clinic_info">Second Landline</p>
            <input
              className="clinic_input city_input_width"
              defaultValue={clinicInfo?.landline2}
              readOnly
            />
          </div>
        </div>
        <div>
          <p className="clinic_info">Email</p>
          <input
            className="clinic_input name_input_width"
            defaultValue={clinicInfo?.email}
            readOnly
          />
          <input readOnly className="mapbutton" defaultValue={"Pin on map"} />
        </div>
      </form>

      {/* clinic fiture checkbox */}
      <p className="clinic_checkbox">Clinic Features</p>
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
    </div>
  );
};

export default Getcliniclocation;
