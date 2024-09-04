import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/adminnavigate.css'
import ManageGroup from './ManageGroup'
import { getGroupRequest } from '../../redux/slice/approveGroupSlice'

function AdminApprove() {
  const dispatch = useDispatch();
  const { groupRequests } = useSelector(state => state.groupRequests);

  useEffect(() => {
    dispatch(getGroupRequest());
  },[])

  const pendingGroups = groupRequests.map((group) => {
    return (
    <ManageGroup 
      key={group.id} 
      groupID={group.id}
      groupName={group.name} 
      banner={group.banner} 
      description={group.description} 
      status={group.status === 'Pending' ? true : false}
      />
    )
  });
  return (
    <div  className='admin_approve_container'>
      <div className="approve_search_bar">
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search Group' />
            </div>
      </div>

    <div className="group_list">
      {pendingGroups}
    </div>

    </div>
  )
}

export default AdminApprove