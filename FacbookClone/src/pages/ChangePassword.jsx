import React from 'react'
import '../css/changepassword.css'
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

          <button type='button' >Confirm Change</button>

        </div>
    </div>
  )
}

export default ChangePassword