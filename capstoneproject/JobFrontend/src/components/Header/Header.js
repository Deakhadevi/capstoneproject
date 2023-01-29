import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="Images/logo.png" alt="logo"  width="50px" height="50px"/>
      </div>
      <div className="section1">
       <span>Dashboard  </span>
       <span>Application Profile </span>
       <span>Applied Jobs </span>
       <span>Activity </span>
       <span>JobAgent</span>
      </div>
      <div className="profile">
        <img src="Images/profile.png" alt="profile"  width="30px" height="30px"/>
      </div>
    </div>
  )
}

export default Header

