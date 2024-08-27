import React, { useState } from 'react'
import logo from '../../image/logo.png'
import avatar from '../../image/avatar.jpg'
import '../../css/header.css'
import DropDownBar from './DropDownBar'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotificationList from './NotificationList'

function Header() {

  const { avatar } = useSelector(state => state.profile);
  const [showNotifications, setShowNotifications] = useState(false);
const [dropbar,setDropBar] = useState(false);
function toggle(){
  setDropBar(false);
}
  return (
    <div className='header_container'>

        <div className="search_bar">
            <NavLink to={"/home"}><img src={logo} alt="" /></NavLink>
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search CrabNest' />
            </div>
        </div>

        <div className="header_nav">
        <NavLink to={"/home"}><i class="ri-home-5-fill"></i></NavLink>
        <i class="ri-team-fill"></i>
        <i class="ri-group-2-fill"></i>
        <i class="ri-tools-fill"></i>
        </div>
    
        <div className="noti_action">
        <i class="ri-notification-4-fill" onClick={() => setShowNotifications(!showNotifications)}></i>
        <img src={`data:image/jpg;base64,${avatar}`} alt="" onClick={()=>setDropBar((prev) => !prev)}/>

        {dropbar && <div><DropDownBar toggleDropBar={toggle} /></div>}
        {showNotifications && <NotificationList />}
        
        </div>
    </div>
  )
}

export default Header
