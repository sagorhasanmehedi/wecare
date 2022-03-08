import React from "react";
import "./Getcliniclocation.css";
import { useForm } from "react-hook-form";

const Getcliniclocation = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="clinic_location">
      <h1 className="main_section_heading">Clinic Locations</h1>
      <p className="clinic_location_subtitle">Location 1</p>

      {/* clinic location input */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="clinic_info">Clinic Name</p>
          <input
            className="clinic_input name_input_width"
            {...register("Clinic_Name")}
          />
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Address</p>
            <input
              className="clinic_input name_input_width"
              {...register("Address")}
            />
          </div>
          <div>
            <p className="clinic_info">Address 2nd line</p>
            <input
              className="clinic_input name_input_width"
              {...register("Address_2nd_line")}
            />
          </div>
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Zip_code</p>
            <input
              className="clinic_input zip_input_width"
              {...register("Zip_code")}
            />
          </div>

          <div>
            <p className="clinic_info">City</p>
            <input
              className="clinic_input city_input_width"
              {...register("City")}
            />
          </div>
          <div>
            <p className="clinic_info">Country</p>
            <input
              className="clinic_input city_input_width"
              {...register("Country")}
            />
          </div>
        </div>
        <div className="input_line">
          <div>
            <p className="clinic_info">Landline</p>
            <input
              className="clinic_input city_input_width"
              {...register("Landline")}
            />
          </div>
          <div>
            <p className="clinic_info">Second Landline</p>
            <input
              className="clinic_input city_input_width"
              {...register("Second_Landline")}
            />
          </div>
        </div>
        <div>
          <p className="clinic_info">Email</p>
          <input
            className="clinic_input name_input_width"
            {...register("Email")}
          />
        </div>
        {/* <input type="submit" /> */}
      </form>

      {/* clinic fiture checkbox */}
      <p className="clinic_checkbox">Clinic Features</p>
      <div className="clinic_fiture">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
          />
          <label class="form-check-label" for="anime">
            Disabled Access
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
          />
          <label class="form-check-label" for="anime">
            Cash payments
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="anime"
            name="hobby"
          />
          <label class="form-check-label" for="anime">
            Credit card payments
          </label>
        </div>
      </div>
    </div>
  );
};

export default Getcliniclocation;
