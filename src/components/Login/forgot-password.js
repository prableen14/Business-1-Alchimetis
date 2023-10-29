import React from "react";
import "./style.scss";
import { Title, Textbox, Button, Alert } from "../../atoms";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import { useNavigate } from "react-router-dom";

const ForgotPassword = (props) => {
  const navigate = useNavigate();
  return (
    <div className="Login-Page">
      <div className="Login-Page-box">      
        <div id="login-header">
          <img src={LeafBlue} alt="company leaf blue" />{" "}
          <Title title="Ecoforce" size="large" />  
        </div>
        <div id="resetpw">
        <Title subtitle="Reset Password" size="large"/></div>
        <Alert/>
        <div>
          <Textbox
            placeholder={"Enter email"}
            label="Email"
            name="email"
          />
        </div>
        <Button text="Send Email" onClick={() => navigate("/dashboard")} />
      </div>
      <div className="Login-Page-have-acc">
        Don't have an account ? <div onClick={() => navigate("/register")}>Register</div>
      </div>
    </div>
  );
};

export default ForgotPassword;