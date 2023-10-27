import React from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import Form from "react-bootstrap/Form";
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
          <Textbox
            placeholder={"Enter username"}
            label='Username'
            name='username'
          />
          <Textbox
            placeholder={"Enter password"}
            label='Password'
            type='password'
            name='password'
          />
        </div>
        <div className='login-terms'>
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            className='term-checkbox'
          />
          <span>Remember me</span>
        </div>
        <a href='/dashboard'>
          <Button text='Login' />
        </a>
      </div>
    </div>
  );
};

export default Login;
