import React, { useEffect } from 'react'
import Post from '../components/shared/Post'
import { useDispatch, useSelector } from 'react-redux'
import '../css/group.css'
import Header from '../components/shared/Header'
import CreatePost from '../components/shared/CreatePost'
import { useParams } from 'react-router-dom'
import { fetchGroupById, joinGroup, leaverGroup, cancelJoin } from '../redux/slice/groupSlice'
import { useNavigate } from 'react-router-dom'

function GroupFeed() {
  const {groupId} = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const {username} = useSelector(state=>state.profile)

  const {currentGroup} = useSelector(state=>state.group)

  const isMemer = currentGroup.members && currentGroup.members.includes(username);

  const isPending = currentGroup.waitlist && currentGroup.waitlist.includes(username);

  useEffect(()=>{

    dispatch(fetchGroupById({groupId: groupId}))
    
  },[])


  const adminButton = () => {
    if (currentGroup.admins && currentGroup.admins.includes(username)) {
      console.log(username);
      return (
        <button className="setting" onClick={()=> nav(`/groups/${currentGroup.id}/admin`)}>
          <i className="ri-tools-fill"></i> Admin
        </button>
      );
    }
    return null;
  };

  const handleJoinGroup = async () => {
    try {
      await dispatch(joinGroup({ groupId: currentGroup.id, username: username }));
      await dispatch(fetchGroupById({ groupId: groupId }));
    } catch (error) {
      console.error('Error joining group:', error);
    }
  };
  
  const handleLeaveGroup = async () => {
    try {

      if(currentGroup.admins && currentGroup.admins.includes(username)){
        alert('You are an admin of this group. Please remove yourself from admin list before leaving the group');
        return;
      }
      
      await dispatch(leaverGroup({ groupId: currentGroup.id, username: username }));
      await dispatch(fetchGroupById({ groupId: groupId }));
    } catch (error) {
      console.error('Error leaving group:', error);
    }
  };
  
  const handleCancelJoin = async () => {
    try {
      await dispatch(cancelJoin({ groupId: currentGroup.id, username: username }));
      await dispatch(fetchGroupById({ groupId: groupId }));
    } catch (error) {
      console.error('Error canceling join:', error);
    }
  };

  return (
    <>
    <Header/>
    <div className='group_container_feed'>
      <div className="group_banner_feed">
        <img src={`http://localhost:1414${currentGroup.banner}`}/>
      </div>

      <div className="group_info_feed">

        <div>
          <h1 className="name">{currentGroup.name}</h1>


          {currentGroup.isPrivate ?
            <div className="property">
                <h5>Private <i class="ri-lock-line"></i></h5>
            </div>
          :
            <div className="property">
                <h5>Public <i class="ri-earth-fill"></i></h5>
            </div>
         }
        </div>


        <div className='button'>

         {isPending ? (

              <button className="pending" onClick={handleCancelJoin}>
                <i className="ri-time-fill"></i> Pending
              </button>

            ) : (
              <>
                {!isMemer ? (
                  <button className="join" onClick={handleJoinGroup}>
                    <i className="ri-login-box-line"></i> Join
                  </button>
                ) : (
                  <>
                    <button className="leave" onClick={handleLeaveGroup}>
                      <i className="ri-logout-box-fill"></i> Leave
                    </button>
                  </>
                )}
            </>
          )}
          
          {adminButton()}

        </div>

      </div>
      <CreatePost where={"group"}/>
      <div className="group_feed">
        <ul className="post">
        </ul>

        <div className="group_statistic_feed">
          <div className="description">
            <h4>About</h4>
            <p>Connecting all the Software Enginerring all over the world, building and construction software</p>

            {currentGroup.isPrivate?
            <h4><i class="ri-lock-line"></i> Private</h4>
              :
            <h4><i class="ri-global-fill"></i> Public</h4>

            }
            <p>Only member of this group can view post. Please join group to access further</p>
          </div>
          
          <div className="admin_list">
            
          </div>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default GroupFeed