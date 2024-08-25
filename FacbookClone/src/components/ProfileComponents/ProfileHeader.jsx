import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/profileheader.css'
import avatar from '../../image/avatar.jpg'
import cover from '../../image/banner.png'
import { useSelector } from 'react-redux';

function ProfileHeader() {
  const {  username, fullName, bio, avatar} = useSelector(state => state.profile);
    return (
      <div className="header_profile_container">

        <div className="profile_cover">

          <img src={cover} alt="" />

          <div className="profile_info">
            <div className="avatar">
              <img  src={`data:image/jpg;base64,${avatar}`}/>
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