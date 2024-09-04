import React from 'react'
import '../../css/groupDisplay.css'
import ManageGroup from '../AdminComponents/ManageGroup'

function GroupDisplay({group_list}) {
  return (
    <div className='group_display_container'>
        <div className="the_hover_button">
         YOUR GROUP 
          <i class="ri-arrow-left-s-fill"></i>
        </div>

        <div className="group_list_display">
          <button className='create_group_req'>Create Group</button>
          <ManageGroup/>
          <ManageGroup/>
          <ManageGroup/>
          <ManageGroup/>
          <ManageGroup/>
          <ManageGroup/>
          <ManageGroup/>

        </div>
    </div>
  )
}

export default GroupDisplay