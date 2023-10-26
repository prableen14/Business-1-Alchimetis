import React from "react";
import Button from "react-bootstrap/Button";
import "./style.scss";

const ButtonComp = (props) => {
  return (
    <div className='buttonComp'>
      <Button size='lg' variant={props?.variant || "primary"}>
        {props?.text}
      </Button>
    </div>
  );
};

export default ButtonComp;
