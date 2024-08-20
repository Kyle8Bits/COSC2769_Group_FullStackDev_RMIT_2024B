import React from 'react'
import '../../css/dropdownbar.css'

function DropDownBar() {
  return (
    <div>
        <ul className="dropdown_list dropdownbar">
            <li>Profile</li>
            <li>Setting</li>
            <div className='dropdown_line'></div>
            <li>Sign Out</li>
        </ul>
    </div>
  )
}

export default DropDownBar