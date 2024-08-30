import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import '../../css/profileheader.css'
import { useSelector, useDispatch} from 'react-redux';
import { resetUpdateState } from '../../redux/slice/editProfileSlice';
import fallbackAvatar from '../../image/default-avatar.jpg'
import { fetchOtherUserData } from '../../redux/slice/otheruserSlice';

function ProfileHeader() {
  const dispatch = useDispatch();

  const userDisplaying  = useParams();

  const currentUserProfile = useSelector(state => state.profile);
  const otherUserProfile = useSelector(state => state.otherUser);


  const isCurrentUser = currentUserProfile.username === userDisplaying.username.replace('@', '');


  const { username, fullName, bio, avatar, banner } = isCurrentUser ? currentUserProfile : otherUserProfile;


  useEffect(() => {
    if (!isCurrentUser) {
        console.log("Run")
        console.log(currentUserProfile.username, "-", userDisplaying.username )
        dispatch(fetchOtherUserData({ username: userDisplaying.username, currentUser: currentUserProfile.username  }));
    }
}, [dispatch, userDisplaying]);



    return (
      <div className="header_profile_container">

        <div className="profile_cover">

          <img src={`http://localhost:1414${banner}`} alt="" />

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
                <NavLink to={`/@${username}/edit`}><button onClick={()=>dispatch(resetUpdateState())} className='edit'>Edit Profile</button></NavLink>
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