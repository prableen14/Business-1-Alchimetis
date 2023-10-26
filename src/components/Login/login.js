import React from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";

const Login = (props) => {
  return (
    <div className='Login-Page'>
      <div className='Login-Page-box'>
        <div id='login-header'>
          <img src={LeafBlue} alt='company leaf blue' />{" "}
          <Title title='Ecoforce' size='large' />
        </div>
        <div>
          <Textbox placeholder={"Enter username"} label='Username' />
          <Textbox placeholder={"Enter password"} label='Password' />
        </div>
        <div>
          <Button text='Login' />
        </div>
      </div>
    </div>
  );
};

export default Login;
