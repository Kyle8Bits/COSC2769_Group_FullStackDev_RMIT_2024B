import React, {useEffect} from 'react'
import Post from '../shared/Post'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import '../../css/profilenavigate.css'
import {fetchPostOfUser} from '../../redux/slice/profileSlice'


function ProfilePosts() {
   
  const {username} = useParams();

  const passin = username.replace('@', '');

  const currentUser = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const {posts} = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchPostOfUser({username: passin}));
  },[] )

  const userPost = posts.slice().reverse().map(post=>{
    const hasReacted = post.post.reactBy.includes(currentUser.username);
    return(
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
     
    )
  })

  return (
    <div className='profile_posts_container'>
      <ul className='profile_post_list'>
       {userPost}
      </ul>
    </div>
  )
}

export default ProfilePosts
