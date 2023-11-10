import React from 'react'
import "./style.scss";
import Avatar from '../Avatar/avatar';

const Profile = (prop) => {
  const {name="Rahul Shaw", email="rahulshaw@gmail.com"} = prop
  return (
    <div className='profile-container'>
      <div className='profile-container_avatar'>
        <Avatar name={name} />
      </div>
      <div className='profile-container_info'>
        <div className='profile-container_info-name'>{name}</div>
        <div className='profile-container_info-email'>{email}</div>
      </div>
    </div>
  )
}

export default Profile