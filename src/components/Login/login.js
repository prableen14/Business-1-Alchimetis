import React, { useState } from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import Form from "react-bootstrap/Form";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from '../Utils/validation';
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase"; 
import checkIfEmailExists from "../Utils/checkIfEmailExists"; 
const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    if (trimmedEmail === "" || trimmedPassword === "") {
      alert("These fields are mandatory");
      return;
    }
  
    if (!validateEmail(trimmedEmail) || !validatePassword(trimmedPassword)) {
      alert("Invalid username or password format");
      return;
    }
  
    const emailExists = await checkIfEmailExists(trimmedEmail);
  if(emailExists){
    try {
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      navigate("/dashboard");
    } catch (error) {
      alert("Wrong password. Please try again.");
      console.error("Authentication error:", error.message);
      return; 
    }}
    else{
      alert("No account registered with this mail. Please register first.")
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
          <Title title='Ecofocus' size='large' />
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
