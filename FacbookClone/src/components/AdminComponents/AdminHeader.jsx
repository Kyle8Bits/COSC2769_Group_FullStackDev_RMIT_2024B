import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/adminheader.css'

function AdminHeader() {

    return (
      <div className="header_admin_container">

        

        <div className="admin_nav">
            <div className="tab_nav">
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to="/admin/resume">
              <div>Resume User</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to="/admin/suspend">
              <div>Suspend User</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to="/admin/approve">
              <div>Approve Group</div>
            </NavLink>
            </div>

            <div className="line"></div>
        </div>

      </div>
    );
  }

export default AdminHeader