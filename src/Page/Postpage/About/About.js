import React, { useState } from "react";
import "./About.css";
import RichTextEditor from "react-rte";

const About = (props) => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  console.log(value);
  const onChange = (value) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value.toString("html"));
    }
  };

  return (
    <div className="about">
      <p className="about_heading">About</p>

      <RichTextEditor
        className="about_text_editor"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default About;
