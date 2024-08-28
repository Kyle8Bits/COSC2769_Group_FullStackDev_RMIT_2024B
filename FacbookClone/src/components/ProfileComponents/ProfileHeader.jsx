import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/profileheader.css'
import { useSelector } from 'react-redux';

import fallbackAvatar from '../../image/default-avatar.jpg'

function ProfileHeader() {
  const {  username, fullName, bio, avatar, banner} = useSelector(state => state.profile);
  console.log(avatar)
    return (
      <div className="header_profile_container">

        <div className="profile_cover">

          <img src={`/src/${banner}`} alt="" />

          <div className="profile_info">
            <div className="avatar">
              <img  src={avatar ? `http://localhost:1414${avatar}` : fallbackAvatar} alt="User Avatar"/>
            </div>

            <div className="name">
                <div className="fullname">
                    {fullName}
                </div>
                <div className="username">
                    @{username}
                </div>
                <div className="bio">{bio}</div>
            </div>

            <div className="button">
                <button className='add'>Add Friend</button>
                <NavLink to={`/@${username}/edit`}><button className='edit'>Edit Profile</button></NavLink>
            </div>
          </div>

        </div>
        

        <div className="fame_count">
            <h4 className="friend"> 240  <span>friends</span></h4>
            <h4 className='follower'> 1.6k  <span>followers</span></h4>
        </div>

        <div className="profile_nav">
            <div className="tab_nav">

            <NavLink  className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${username}/posts`}>
              <div >Posts</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${username}/about`}>
              <div>About</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${username}/friends`}>
              <div>Friends</div>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'tab active_nav' : 'tab'} to={`/@${username}/photos`}>
              <div>Photos</div>
            </NavLink>
            </div>

            <div className="line"></div>
        </div>

      </div>
    );
  }

export default ProfileHeader