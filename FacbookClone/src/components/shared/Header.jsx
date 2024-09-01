import React, { useState } from 'react'
import logo from '../../image/logo.png'
import '../../css/header.css'
import DropDownBar from './DropDownBar'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NotificationList from './NotificationList'
import FindingDropBar from './FindingDropBar'
import { clearCard, fetchCards} from '../../redux/slice/searchSlice'

function Header() {
  const dispatch = useDispatch();
  const { avatar, username, isAdmin } = useSelector(state => state.profile);

  const [dropbar,setDropBar] = useState(false);
  const [notification,setNotiBar] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const {cards, status} = useSelector(state => state.search);


function toggle(){
  setDropBar(false);
}

function toogelNoti(){
  setNotiBar(true);
}

const handleSearchChange = (e) => {
  setIsBlurred(false); 
  const searchTerm = e.target.value;
  if (searchTerm === '') {
      dispatch(clearCard());
  } else {
      dispatch(fetchCards(searchTerm));

  }
};

const handleBlur = () => {
  setTimeout(() => {
    dispatch(clearCard());
    setIsBlurred(true);

  }, 200);
};

  return (
    <div className='header_container'>

        <div className="search_bar">
            <NavLink to={"/home"}><img src={logo} alt="" /></NavLink>
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input 
                type="text" 
                placeholder='Search CrabNest'
                onChange={handleSearchChange}
                onBlur={handleBlur}
                onFocus={() => setIsBlurred(false)}
                 />
            </div>
        </div>

        <div className="header_nav">
        <NavLink to={"/home"}><i class="ri-home-5-fill"></i></NavLink>
        <i class="ri-team-fill"></i>
        <i class="ri-group-2-fill"></i>
        {isAdmin?<NavLink to={'/admin'} ><i class="ri-tools-fill"></i></NavLink>:<></>}
        </div>
    
        <div className="noti_action">
        <i class="ri-notification-4-fill" onClick={()=> setNotiBar((prev)=>!prev)}></i>

        <img src={`http://localhost:1414${avatar}`} alt="" onClick={()=>setDropBar((prev) => !prev)}/>

        {dropbar === true?<div><DropDownBar toggleDropBar={toggle} currentUsername={username}/>
          </div>:<div></div>}
        {notification===true?<><NotificationList/></>:<></>}

  
          <FindingDropBar cards={cards} />

        </div>
    </div>
  )
}

export default Header
