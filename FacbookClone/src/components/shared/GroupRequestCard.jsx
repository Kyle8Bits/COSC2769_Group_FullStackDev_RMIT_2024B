import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { approveGroupCreation, rejectGroupCreation } from '../../redux/slice/adminSlice';
import '../../css/grouprequestcard.css';


function GroupRequestCard({groupId, groupName, img, groupDescription, adminName, isPrivate }) {
  const dispatch = useDispatch();
  

  const handleApproveGroup = () => {
    dispatch(approveGroupCreation(groupId));
    console.log("Group ID:", groupId);  // Add this inside the GroupRequestCard component

  };

  const handleRejectGroup = () => {
    dispatch(rejectGroupCreation(groupId));
    console.log("Group ID:", groupId);  // Add this inside the GroupRequestCard component

  };

  return (
    <div className='group_card_container'>
      <div className="card">
            <img src={img} alt='group-picture'/>
            <h2 className="group_name">{groupName}</h2>
            <p className="group_purpose">Purpose: {groupDescription}</p>
            <p className="group_admin">{adminName} </p>    
            <p className="group_status">Private: {isPrivate ? 'Yes' : 'No'} </p>  
            
      </div>
      <div className="group_decision">
            <div className="approve" onClick={handleApproveGroup}>Approve</div>
            <div className="reject" onClick={handleRejectGroup}>Reject</div>
      </div>
    </div>
  )
}

export default GroupRequestCard