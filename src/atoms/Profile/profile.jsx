import React from 'react'
import "./style.scss";

const Profile = (prop) => {
  const {name="Rahul Shaw", email="rahulshaw@gmail.com"} = prop
  return (
    <div className='profile-container'>
      <div className='profile-container_avatar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwHGbBun5jLcARrAqEug83OeGrSmECj4pEg&usqp=CAU" alt="placeholder" />
      </div>
      <div className='profile-container_info'>
        <div className='profile-container_info-name'>{name}</div>
        <div className='profile-container_info-email'>{email}</div>
      </div>
    </div>
  )
}

export default Profile