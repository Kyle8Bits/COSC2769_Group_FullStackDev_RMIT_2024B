import React, { useEffect } from 'react'
import Post from '../components/shared/Post'
import { useDispatch, useSelector } from 'react-redux'
import '../css/group.css'
import Header from '../components/shared/Header'
import CreatePost from '../components/shared/CreatePost'
import { useParams } from 'react-router-dom'
import { fetchGroupById, joinGroup, leaverGroup, cancelJoin, getPostForGroup } from '../redux/slice/groupSlice'
import { useNavigate } from 'react-router-dom'

function GroupFeed() {
  const {groupId} = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const {username} = useSelector(state=>state.profile)
  const currentUser = useSelector(state=>state.profile)

  const {currentGroup,posts} = useSelector(state=>state.group)
  

  const isMember = currentGroup.members && currentGroup.members.includes(username);

  const isPending = currentGroup.waitlist && currentGroup.waitlist.includes(username);

  useEffect(  ()=>{

     dispatch(fetchGroupById({groupId: groupId}))
    dispatch(getPostForGroup({groupId: groupId}))

    
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

  const displayPosts = posts.slice().reverse().map((post) => {
    const hasReacted = post.post.reactBy.includes(currentUser.username);
    return (
      <Post
        key={post.post._id}
        date = {post.post.createdAt}
        postId={post.post.id}
        author_avatar={post.avatar}
        author_username = {post.post.author}
        author_name={post.fullname}
        photos={post.post.images} // Pass the array of full image URLs
        caption={post.post.content}
        reaction = {post.post.reactions}
        commentCount={ post.post.comments.length}
        currentUser={currentUser}
        hasReacted={hasReacted} 
        isEdited={post.post.edited}
        showingHistory={false}
      />
    );
});


  
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
                {!isMember ? (
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
      {isMember && <CreatePost where={groupId}/>}
      <div className="group_feed">


        {isMember || !currentGroup.isPrivate ? (
          <>
              <ul className="post" style={{ marginTop: '20px' }}>
                {displayPosts}
              </ul>
          </>
        ) : (
            <h1>Only members can see posts from this group</h1>
        )}

        <div className="group_statistic_feed">
          <div className="description">
            <h4>About</h4>
            <p>{currentGroup.description}</p>

            {currentGroup.isPrivate?
            <h4><i class="ri-lock-line"></i> Private</h4>
              :
            <h4><i class="ri-global-fill"></i> Public</h4>

            }
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