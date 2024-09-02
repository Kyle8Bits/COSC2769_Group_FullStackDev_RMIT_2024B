import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GroupRequestCard from '../shared/GroupRequestCard'
import { fetchGroupRequests } from '../../redux/slice/adminSlice'
import '../../css/adminnavigate.css'

function AdminApprove() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchGroupRequests());
  }, [dispatch]);
  
  const groupRequests = useSelector(state => state.admin.groupRequests);
  
  const groupRequestsList = groupRequests.map(group => (
      <GroupRequestCard 
      
      group={group}
      groupId={group._id}
      groupName={group.name}
      img={group.img}
      groupDescription={group.description}
      isPrivate={group.isPrivate}
      adminName={group.adminName}
      />
  ))

  return (
    <div  className='admin_approve_container'>
      <div className="approve_search_bar">
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search Group' />
            </div>
      </div>

      <div className='group_container'>
        <div className="group_request_list">
          {groupRequestsList}
        </div>
      </div>
    </div>
  )
}

export default AdminApprove