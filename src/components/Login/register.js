import React, { useState } from "react";
import "./style.scss";
import { Title, Textbox, Button } from "../../atoms";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { validateName, validateUsername,  validateEmail,validatePassword } from '../Utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../../firebase'; 
import { collection, addDoc } from "firebase/firestore";
const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleRegistration = async () => {
    const trimmedName = formData.name.trim();
    const trimmedUsername = formData.username.trim();
    const trimmedPassword = formData.password.trim();
    const trimmedEmail = formData.email.trim();
    if (
      validateName(trimmedName)&&
      validateUsername(trimmedUsername) &&
    validateEmail(trimmedEmail) &&
    validatePassword(trimmedPassword)
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        const userDataCollection = collection(database, "users");
        await addDoc(userDataCollection, {
          uid: user.uid, 
          name: trimmedName,
          username: trimmedUsername,
          email: trimmedEmail,
        });
  
        console.log("User registered successfully and data saved to Firestore.");
        navigate('/login');
      } catch (error) {
        console.error("Error during registration:", error.message);
      }
    } else {
      alert('Please enter valid information.');
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
        <Textbox placeholder={"Enter name"} label='Name' name="name" onChange={handleInputChange} />
          <Textbox placeholder={"Enter username"} label='Username' name="username" onChange={handleInputChange} />
          <Textbox placeholder={"Enter email"} label='Email' name="email" onChange={handleInputChange} />
          <Textbox placeholder={"Enter password"} label='Password' name="password" type="password" onChange={handleInputChange} />
          <div className='login-terms'>
            <Form.Check
              type={"checkbox"}
              id={`default-checkbox`}
              className='term-checkbox'
            />
            <span>
              I accept <a href='www.google.com'>Terms and Conditions</a>
            </span>
          </div>
        </div>
        <Button text='Register' onClick={handleRegistration} />
      </div>
      <div className='Login-Page-have-acc'>
        Already have an account ? <div onClick={() => navigate("/login")}>Login</div>
      </div>
    </div>
  );
};

export default Register;
