import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import '../../css/profileheader.css'
import { useSelector, useDispatch} from 'react-redux';
import { resetUpdateState } from '../../redux/slice/editProfileSlice';
import fallbackAvatar from '../../image/default-avatar.jpg'
import { fetchOtherUserData } from '../../redux/slice/otheruserSlice';
import { deleteFriendship, sendFriendRequest } from '../../redux/slice/friendSlice';

import { banUser } from '../../redux/slice/activeUserSlice';
import { addListener } from '@reduxjs/toolkit';
function ProfileHeader() {
  const dispatch = useDispatch();

  const userDisplaying  = useParams();



  console.log("UserDisplaying", userDisplaying.username.replace('@', ''))

  const currentUserProfile = useSelector(state => state.profile);
  const otherUserProfile = useSelector(state => state.otherUser);


  const isCurrentUser = currentUserProfile.username === userDisplaying.username.replace('@', '');

  console.log("Test", isCurrentUser)
  console.log("CurrentUser", currentUserProfile.username)
  
  const { username, fullName, bio, avatar, banner } = isCurrentUser ? currentUserProfile : otherUserProfile.user;

  const isFriend = isCurrentUser ? false : otherUserProfile.isFriend;

  const handleDeletefriend = async () => {
    await dispatch(deleteFriendship({
      requester: {username: currentUserProfile.username},
      recipient: {usernameCard: otherUserProfile.user?.username}
    }));
    dispatch(fetchOtherUserData({ username: userDisplaying.username.replace('@', ''), currentUser: currentUserProfile.username  }));
    
  }

  useEffect(() => {
    console.log("Run");
    const isCurrentUser = currentUserProfile.username === userDisplaying.username.replace('@', '');
    if (!isCurrentUser) {
        console.log("Run");
        dispatch(fetchOtherUserData({ username: userDisplaying.username.replace('@', ''), currentUser: currentUserProfile.username  }));
    }
}, [userDisplaying]);

const handleRequestFriend = async () => {
  await dispatch(sendFriendRequest({
    requester: currentUserProfile.username,
    recipient: userDisplaying.username.replace('@', ''),
  }));
  dispatch(fetchOtherUserData({ username: userDisplaying.username.replace('@', ''), currentUser: currentUserProfile.username  }));
  alert('Friend request sent');
}

const friendButton = () => {
  if (isFriend === "None") {
    return <button className='add' onClick={handleRequestFriend}>Add Friend</button>
  }
  else if (isFriend === "Pending" || isFriend === "Accepted") {
    return <button className='unfr' onClick={handleDeletefriend}>Unfriend</button>
  }
};

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
                {(currentUserProfile.isAdmin && !isCurrentUser)?<button style={{backgroundColor:'chocolate'}} onClick={()=> dispatch(banUser({username: {username}}))}>Deactivate</button>:<></>}
                {!isCurrentUser ? (
                  <>
                  {friendButton()}
                  
                  </>
                ) : (
                   <NavLink to={`/@${username}/edit`}><button onClick={()=>dispatch(resetUpdateState())} className='edit'>Edit Profile</button></NavLink>
                )}

            </div>
          </div>

        </div>
        

        <div className="fame_count">
       
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