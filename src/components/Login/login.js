import React, { useState } from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import Form from "react-bootstrap/Form";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from './validation';
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase"; 
const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async() => {
 
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      alert("These fields are mandatory");
      return;
    }
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    if (!validateEmail(trimmedEmail) || !validatePassword(trimmedPassword)) {
      alert("Invalid username or password format");
      return;
    }
    try {
    const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
    navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password. Please try again.");
      } else {
        alert(error.message);
      }
      console.error("Authentication error:", error.message);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
            placeholder={"Enter email"}
            label='Email'
            name='email'
        onChange={handleInputChange}
          />
          <Textbox
            placeholder={"Enter password"}
            label='Password'
            type='password'
            name='password'
        onChange={handleInputChange}
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
