import React, { useState } from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import Form from "react-bootstrap/Form";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("dashboard");
    } else {
    }
  };

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
            onChange={(e) => setUsername(e?.target?.value)}
          />
          <Textbox
            placeholder={"Enter password"}
            label='Password'
            type='password'
            name='password'
            onChange={(e) => setPassword(e?.target?.value)}
          />
        </div>
        <div className='login-terms-forgot'>
          <div className='login-terms'>
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              className='term-checkbox'
            />
            <span>Remember me</span>
          </div>
          <div className='forgot-password-link'>
            <LockIcon />{" "}
            <span onClick={() => navigate("/forgot-password")}>
              Forgot your password?
            </span>
          </div>
        </div>
        <Button text='Login' onClick={handleLogin} />
      </div>
      <div className='Login-Page-have-acc'>
        Don't have an account ?{" "}
        <div onClick={() => navigate("/register")}>Register</div>
      </div>
    </div>
  );
};

export default Login;
