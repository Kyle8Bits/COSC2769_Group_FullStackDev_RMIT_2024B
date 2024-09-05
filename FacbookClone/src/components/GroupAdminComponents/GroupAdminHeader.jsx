import React from 'react'
import { NavLink, useParams} from 'react-router-dom';
import '../../css/admingroup.css'
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';

import { fetchGroupById, getAdmins } from '../../redux/slice/groupSlice';

function GroupAdminHeader() {
    const dispatch = useDispatch();
    const {groupId} = useParams();
    const {currentGroup} = useSelector(state=>state.group)

    useEffect(() => {
      const fetchData = async () => {
        if (groupId) {
          await dispatch(fetchGroupById({ groupId: groupId }));
          dispatch(getAdmins({ groupId: groupId }));
        }
      };
    
      fetchData();
    }, [dispatch]);

  
  return (
    <div className="header_admin_group_container">

        

    <div className="admin_group_nav">
        <div className="tab_nav">
        <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/groups/${currentGroup.id}/admin/waitlist`}>
          <div>Wait List</div>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/groups/${currentGroup.id}/admin/groupInfo`}>
          <div>Edit Group</div>
        </NavLink>
        </div>

        <div className="line"></div>
    </div>

  </div>
  )
}

export default GroupAdminHeader
