import React from 'react'
import '../css/changepassword.css'
import {NavLink} from 'react-router-dom'

function ChangePassword() {
  return (
    <div className="change_password_page">
        <div className="change_password_container">

            <div className="cpw_header">Change Password</div>
              
            <div className="cp_input">

              <div className="new_password">
                <input className='input' type="text" placeholder='New Password' />
              </div>

              <div className="confirm_password">
        
                <input className='input' type="text" placeholder='Confirm Password' />
              </div>
          
            </div>


          <NavLink to={'/'}><button type='button' >Confirm Change</button></NavLink>

        </div>
    </div>
  )
}

export default ChangePassword