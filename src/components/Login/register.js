import React from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className='Login-Page'>
      <div className='Login-Page-box'>
        <div id='login-header'>
          <img src={LeafBlue} alt='company leaf blue' />{" "}
          <Title title='Ecoforce' size='large' />
        </div>
        <div>
          <Textbox placeholder={"Enter username"} label='Username' />
          <Textbox placeholder={"Enter email"} label='Email' />
          <Textbox placeholder={"Enter password"} label='Password' />
          <div className='login-terms'>
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              className='term-checkbox'
            />
            <span>
              I accept <a href='www.google.com'>Terms and Condititions</a>
            </span>
          </div>
        </div>
        <Button text='Register' />
      </div>
      <div className='Login-Page-have-acc'>
        Already have an account ? <div onClick={handleClick}>Login</div>
      </div>
    </div>
  );
};

export default Register;
