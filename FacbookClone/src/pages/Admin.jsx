import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminComponents/AdminHeader'
import Header from '../components/shared/Header.jsx'
function Admin() {
  return (
    <div>
      <Header/>
      <AdminHeader/>
      <Outlet/>
    </div>
  )
}

export default Admin