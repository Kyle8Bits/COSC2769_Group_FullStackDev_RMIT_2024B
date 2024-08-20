import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpg'
import '../css/header.css'

function Header() {
  return (
    <div className='header_container'>

        <div className="search_bar">
            <img src={logo} alt="" />
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search CrabNest' />
            </div>
        </div>

        <div className="header_nav">
        <i class="ri-home-5-fill"></i>
        <i class="ri-team-fill"></i>
        <i class="ri-group-2-fill"></i>
        <i class="ri-tools-fill"></i>
        </div>
    
        <div className="noti_action">
        <i class="ri-notification-4-fill"></i>
        <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Header
