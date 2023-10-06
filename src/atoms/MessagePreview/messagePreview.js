import React from "react";
import "./style.scss";

const MessagePreview = (props) => {
    const {imgSrc, name, message, time} = props

    return (
        <div className="message-preview">
           <div className="message-preview-img">
                <img src={imgSrc} alt={name}/>
           </div>
           <div className="message-preview-name">{name}</div>
           <div className="message-preview-message">{message}</div>
           <div className="message-preview-time">{time}</div>
        </div>
    )
}

export default MessagePreview