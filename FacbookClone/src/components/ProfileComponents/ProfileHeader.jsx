import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/profileheader.css'
import avatar from '../../image/avatar.jpg'
import cover from '../../image/banner.png'

function ProfileHeader() {
    return (
      <div className="header_profile_container">

        <div className="profile_cover">

          <img src={cover} alt="" />

          <div className="profile_info">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>

            <div className="name">
                <div className="fullname">
                    Mai Dang Khoa
                </div>
                <div className="username">
                    @kyle_mai
                </div>
                <div className="bio">Code life | Hard life | Again</div>
            </div>

            <div className="button">
                <button className='add'>Add Friend</button>
                <button className='edit'>Edit Profile</button>
            </div>
          </div>

        </div>
        

        <div className="fame_count">
            <h4 className="friend"> 240  <span>friends</span></h4>
            <h4 className='follower'> 1.6k  <span>followers</span></h4>
        </div>

        <div className="profile_nav">
            <div className="tab_nav">

            <NavLink  className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${"kyle_mai"}/posts`}>
              <div >Posts</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${"kyle_mai"}/about`}>
              <div>About</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${"kyle_mai"}/friends`}>
              <div>Friends</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${"kyle_mai"}/photos`}>
              <div>Photos</div>
            </NavLink>
            </div>

            <div className="line"></div>
        </div>

      </div>
    );
  }

export default ProfileHeader