import React from 'react'
import GroupAdminHeader from '../components/GroupAdminComponents/GroupAdminHeader'
import Header from '../components/shared/Header'
import { Outlet } from 'react-router-dom'
function GroupAdmin() {
  return (
    <div>
      <Header/>
      <GroupAdminHeader/>
      <Outlet/>
    </div>
  )
}

export default GroupAdmin
