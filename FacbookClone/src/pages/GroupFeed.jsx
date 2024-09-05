import React, { useEffect } from 'react'
import Post from '../components/shared/Post'
import { useDispatch, useSelector } from 'react-redux'
import '../css/group.css'
import Header from '../components/shared/Header'
import CreatePost from '../components/shared/CreatePost'
import { useParams } from 'react-router-dom'
import { fetchGroupById } from '../redux/slice/groupSlice'
import { useNavigate } from 'react-router-dom'

function GroupFeed() {
  const {groupId} = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const {username} = useSelector(state=>state.profile)

  const {currentGroup} = useSelector(state=>state.group)


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
          <button className="join">  <i class="ri-login-box-line"></i> Join </button>
          <button className="invite"> <i class="ri-add-box-line"></i> Invite</button>
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

            <h4><i class="ri-lock-line"></i> Private</h4>
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