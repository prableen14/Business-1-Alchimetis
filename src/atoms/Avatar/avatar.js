import React from "react";
import "./style.scss";
import { getInitials } from "../../components/Utils/utils";

export default function Avatar({ name }) {
  return (
    <div className="avatar">
      {name ?
        getInitials(name) : 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwHGbBun5jLcARrAqEug83OeGrSmECj4pEg&usqp=CAU" alt="placeholder" />
      }
    </div>
  );
}
