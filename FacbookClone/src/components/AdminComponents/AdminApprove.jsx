import React from 'react'
import ObjectCard from '../shared/ObjectCard'
import { useSelector } from 'react-redux'
import '../../css/adminnavigate.css'

function AdminApprove() {



  return (
    <div  className='admin_approve_container'>
      <div className="approve_search_bar">
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search Group' />
            </div>
      </div>

      <div className='group_container'>
        <div className="group">
          <div className="group_content">
          <img  alt="" />
          
          <div className="group_brief">
            <h2 className="group_name">JavaScript</h2>
            <p className="group_intro">Purposes: To share about code</p>
            {/* maybe update the card object of the user want to create group here */}
          </div>
          </div>

          <div className="approve_dicision">
            <div className="approve">Approve</div>
            <div className="reject">Reject</div>
          </div>
          
        </div>
        


      </div>
    </div>
  )
}

export default AdminApprove