import React, { useState } from "react";
import "./style.scss"; 
const Alert = () => {
  const [open, setOpen] = useState(true);

  if (open) {
    return (
      <div className="alert-container alert alert-warning">
        <div className="description-container">
        <span className="description-text">
        Enter your <b>Email</b> and instructions will be sent to you!
          </span>
        </div>
        <a className="symbol-close-link" onClick={() => setOpen(false)}>
          <span>
            ✖
          </span>
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default Alert;
