import React from 'react'
import '../../css/groupDisplay.css'
import ManageGroup from '../AdminComponents/ManageGroup'
import { useNavigate } from 'react-router-dom'

function GroupDisplay({group_list}) {
  const navigate = useNavigate();
  return (
    <div className='group_display_container'>
        <div className="the_hover_button">
         YOUR GROUP 
          <i class="ri-arrow-left-s-fill"></i>
        </div>

        <div className="group_list_display">
          <button onClick={()=> navigate('/group/create_group')} className='create_group_req'>Create Group</button>
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