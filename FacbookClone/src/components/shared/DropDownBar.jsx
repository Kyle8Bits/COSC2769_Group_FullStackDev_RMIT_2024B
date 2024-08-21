import React from 'react'
import '../../css/dropdownbar.css'
import { Link } from 'react-router-dom'



function DropDownBar({toggleDropBar}) {
  return (
    <div>
        <ul className="dropdown_list dropdownbar">
            <Link to={`/@${'kyle_mai'}`}><li onClick={toggleDropBar} >Profile</li></Link>
            <Link><li>Setting</li></Link>
            <div className='dropdown_line'></div>
            <Link to={'/'}><li>Sign Out</li></Link>
        </ul>
    </div>
  )
}

export default DropDownBar