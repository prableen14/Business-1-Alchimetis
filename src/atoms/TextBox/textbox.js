import React from "react";
import "./style.scss";
import Form from "react-bootstrap/Form";

const Textbox = (props) => {
  return (
    <div className='TextBox'>
      <Form.Control type='text' id='textfield' placeholder='Normal text' />
    </div>
  );
};

export default Textbox;
