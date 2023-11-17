import React, {useState} from "react";
import "./style.scss";
import { Title, Textbox, Button, Alert } from "../../atoms";
import LeafBlue from "../../assets/images/companyLeafBlue.svg";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import { validateEmail } from '../Utils/validation';
import checkIfEmailExists from "../Utils/checkIfEmailExists"; 
const ForgotPassword = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [alertText, setAlertText] = useState(
    "Enter your Email and instructions will be sent to you!"
  );
  const handleSendEmail = async () => {
    const trimmedEmail = formData.email.trim();
    if (trimmedEmail === "" ) {
      alert("This field is mandatory");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      alert("Please enter a valid Email");
      return;
    } 
    const emailExists = await checkIfEmailExists(trimmedEmail);

    if (emailExists) {
      try {
        await sendPasswordResetEmail(auth, trimmedEmail);
        setAlertText("Reset password instructions have been sent to your email.");
      } catch (error) {
        setAlertText("An error occurred. Please check your email and try again.");
        console.error("Error sending reset password email:", error);
      }
    } else {
      setAlertText("Email doesn't exist. Please register first.");
    }
  };

  return (
    <div className="Login-Page">
      <div className="Login-Page-box">      
        <div id="login-header">
          <img src={LeafBlue} alt="company leaf blue" />{" "}
          <Title title="Ecofocus" size="large" />  
        </div>
        <div id="resetpw">
        <Title subtitle="Reset Password" size="large"/></div>
        <Alert text={alertText} />
        <div>
          <Textbox
            placeholder={"Enter email"}
            label="Email"
            name="email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <Button text="Send Email" onClick={handleSendEmail} />
      </div>
      <div className="Login-Page-have-acc">
        Don't have an account ? <div onClick={() => navigate("/register")}>Register</div>
      </div>
    </div>
  );
};

export default ForgotPassword;