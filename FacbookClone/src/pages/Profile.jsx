import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileHeader from '../components/ProfileComponents/ProfileHeader'
import Header from '../components/shared/Header.jsx'
function Profile() {
  return (
    <div>
      <Header/>
      <ProfileHeader/>
      <Outlet/>
    </div>
  )
}

export default Profile
