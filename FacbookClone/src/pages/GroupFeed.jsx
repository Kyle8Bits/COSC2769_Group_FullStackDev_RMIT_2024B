import React from 'react'
import Post from '../components/Post'
import '../css/group.css'
import banner from '../assets/banner.png'

function GroupFeed() {
  return (
    <div className='group_container'>
      <div className="group_banner">
        <img src={banner} alt="" />
      </div>

      <div className="group_info">

        <div>
          <h1 className="name">Software Engineering Community</h1>

          <div className="property">
              <h5>50k members - Private <i class="ri-lock-line"></i></h5>
          </div>
        </div>

        <div className='button'>
          <button className="join">  <i class="ri-login-box-line"></i> Join </button>
          <button className="invite"> <i class="ri-add-box-line"></i> Invite</button>
          <button className="setting"> <i class="ri-tools-fill"></i> Admin</button>
        </div>

      </div>
      <div className="group_feed">
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default GroupFeed