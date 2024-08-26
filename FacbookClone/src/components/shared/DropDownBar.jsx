import React from 'react'
import '../../css/dropdownbar.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout} from '../../redux/slice/loginSlice'



function DropDownBar({toggleDropBar}) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/'); // Redirect to login page
  };

  return (
    <div>
        <ul className="dropdown_list dropdownbar">
            <Link to={`/@${'kyle_mai'}/posts`}><li onClick={toggleDropBar} >Profile</li></Link>
            
            <div className='dropdown_line'></div>
            <li onClick={handleLogout}>Sign Out</li>
        </ul>
    </div>
  )
}

export default DropDownBar