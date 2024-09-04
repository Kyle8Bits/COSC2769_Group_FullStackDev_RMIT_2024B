import React from 'react'
import '../../css/manageGroup.css'

function ManageGroup() {
  return (
    <div>
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

          {/* <div className="approve_dicision">
            <div className="approve">Approve</div>
            <div className="reject">Reject</div>
          </div>
           */}
        </div>
      </div>
    </div>
  )
}

export default ManageGroup