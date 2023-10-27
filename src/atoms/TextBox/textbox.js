import React from "react";
import "./style.scss";
import Form from "react-bootstrap/Form";

const Textbox = (props) => {
  return (
    <div className="TextBox">
      {props.label && (
        <Form.Label id="textfield-label">{props?.label}</Form.Label>
      )}
      <Form.Control
        type={props?.type ? props.type : "text"}
        id="textfield"
        placeholder={props?.placeholder}
        value={props?.value}
        onChange={props?.onChange}
        disabled={props?.disabled}
        {...props}
      />
    </div>
  );
};

export default Textbox;
