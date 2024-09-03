import React, { useEffect } from 'react'
import CreatePost from '../components/shared/CreatePost'
import Header from '../components/shared/Header'
import '../css/newfeed.css'
import Post from '../components/shared/Post.jsx'


import { fetchPosts} from '../redux/slice/postSlice.js'
import { fetchFriend } from '../redux/slice/friendSlice.js'
import { useSelector,useDispatch } from 'react-redux'

function NewFeed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const currentUser = useSelector((state) => state.profile); // Assuming you're using Redux to store the logged-in user's ID

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchPosts({currentUser})); // Fetch posts for the logged-in user
    }
  }, [dispatch, currentUser, posts]);


  const postList = posts.map((post) => (
    <Post
      key={post.post._id}
      postId={post.post._id}
      author_avatar={`http://localhost:1414${post.avatar}`}
      author_name={post.fullname}
      photos={post.post.images} // Pass the array of full image URLs
      caption={post.post.content}
    />
  ));


  return (
    <div className='home_new_feed'>
         <Header/>
        <CreatePost/>
        <div className="post_list_home">
          {/* <Post author_avatar={friend3} author_name={"Cristiano Rolnado"} photo={post1} caption={"Check out my brand new Youtube Channel \n Subcribe now"}/>
          <Post author_avatar={Unknown} author_name={"CrabNest"} photo={post2} caption={"Say hello to our mascot, the crab  \n Sign up now"}/>
          <Post author_avatar={friend4} author_name={"Lionel Messi"} photo={post3} caption={"Momment \n #worldcup2022"}/>
          <Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post4} caption={"So they really make you build a Facebook"}/>
          <Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post5} caption={"Damn, my friends are exhausted from deadlines."}/> */}
          {postList}
          

        </div>

    </div>
  )
}

export default NewFeed
