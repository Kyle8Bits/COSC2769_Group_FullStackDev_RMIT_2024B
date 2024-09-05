import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/admingroup.css'
import { useSelector } from 'react-redux';

function GroupAdminHeader() {

    const {currentGroup} = useSelector(state=>state.group)
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
