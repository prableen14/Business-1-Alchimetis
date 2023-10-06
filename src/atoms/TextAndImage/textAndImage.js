import React from "react";
import "./style.scss";

const TextAndImage = (props) => {
    const {imgSrc, title, date, time} = props

    return (
        <div className="text-image">
            <div className="text-image__img">
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="text-image__text">
                <div className="text-image__text-title">
                    {title}
                </div>
                <div className="text-image__text-time">
                    {date} at {time}
                </div>
            </div>
        </div>
    )
}

export default TextAndImage