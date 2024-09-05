import React from 'react'

function GroupAdminApprove() {
  return (
    <div  className='admin_suspend_container'>

            <div className="suspend_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div className='suspend_list_container'>
            <div className="userlist">

            </div>
        </div>
    <div className="display_active_user">
    </div>


    </div>
  )
}

export default GroupAdminApprove
