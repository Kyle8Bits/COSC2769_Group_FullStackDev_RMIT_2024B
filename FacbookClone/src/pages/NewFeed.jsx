import React, { useEffect } from 'react'
import CreatePost from '../components/shared/CreatePost'
import Header from '../components/shared/Header'
import '../css/newfeed.css'
import Post from '../components/shared/Post.jsx'


import { fetchPosts} from '../redux/slice/postSlice.js'
import { useSelector,useDispatch } from 'react-redux'

function NewFeed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const currentUser = useSelector((state) => state.profile); // Assuming you're using Redux to store the logged-in user's ID
  const { status } = useSelector(state => state.posts);
  useEffect(() => {
    if (currentUser) {
      dispatch(fetchPosts({currentUser})); // Fetch posts for the logged-in user
    }
  }, [currentUser]);



  const postList = posts.slice().reverse().map((post) => {
    return (
      <Post
        key={post.post._id}
        date = {post.post.createdAt}
        postId={post.post.id}
        author_avatar={`http://localhost:1414${post.avatar}`}
        author_username = {post.post.author}
        author_name={post.fullname}
        photos={post.post.images} // Pass the array of full image URLs
        caption={post.post.content}
        reaction = {post.post.reactions}
        commentCount={ post.post.comments.length}
        currentUser={currentUser}
      />
    );
});


  return (
    <div className='home_new_feed'>
         <Header/>
        <CreatePost/>
        <div className="post_list_home">
          {status === 'loading'? <h1 style={{color:"white"}}>Loading...</h1>
          :
          <>
          {postList}
          </>
          }
        </div>

    </div>
  )
}

export default NewFeed
