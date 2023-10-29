import React, { useState } from "react";
import "./style.scss"; 

const Alert = () => {
  const [open, setOpen] = useState(true);

  if (open) {
    const firstVariant = {
      text: "Enter your Email and instructions will be\nsent to you!",
    };

    return (
      <div className="alert-container custom-alert alert alert-warning alert-dismissible">
       
        <div className="description-container">
        <span className="description-text" dangerouslySetInnerHTML={{ __html: firstVariant.text.replace(/\n/g, '<br />') }}></span>
        </div>
        <a className="symbol-close-link btn-close" onClick={() => setOpen(false)}>
          <span className="material-symbols-outlined" role="img" aria-label="close">
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
