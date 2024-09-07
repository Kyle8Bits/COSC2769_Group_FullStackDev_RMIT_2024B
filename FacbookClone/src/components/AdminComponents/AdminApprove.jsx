import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/adminnavigate.css'
import ManageGroup from './ManageGroup'
import { getGroupRequest } from '../../redux/slice/approveGroupSlice'

function AdminApprove() {
  const dispatch = useDispatch();
  const { groupRequests, status} = useSelector(state => state.groupRequests);

  useEffect(() => {
    dispatch(getGroupRequest());
  },[])

  const pendingGroups = groupRequests.map((group) => {
    return (
    <div className='_group'>
    <ManageGroup 
      key={group.id} 
      groupID={group.id}
      groupName={group.name} 
      banner={group.banner} 
      description={group.description} 
      status={group.status === 'Pending' ? true : false}
      />
    
    </div>
    )
  });
  return (
    <div  className='admin_approve_container'>
   
      {status === 'loading' ? <h1 style={{color:'white'}} >Loading...</h1> :<></>}

    <div className="group_list">
      {pendingGroups}
    </div>

    </div>
  )
}

export default AdminApprove