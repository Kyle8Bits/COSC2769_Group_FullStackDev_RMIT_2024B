import React from 'react'
import '../../css/dropdownbar.css'
import { NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout} from '../../redux/slice/loginSlice'



function DropDownBar({toggleDropBar, currentUsername}) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/'); // Redirect to login page
  };


  return (
    <div>
        <ul className="dropdown_list dropdownbar">
            <NavLink to={`/@${currentUsername}/posts`}><li onClick={toggleDropBar} >Profile</li></NavLink>
            
            <div className='dropdown_line'></div>
            <li onClick={handleLogout}>Sign Out</li>
        </ul>
    </div>
  )
}

export default DropDownBar