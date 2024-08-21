import React from 'react'
import CreatePost from '../components/shared/CreatePost'
import Header from '../components/shared/Header'
import '../css/newfeed.css'
import Post from '../components/shared/Post.jsx'

function NewFeed() {
  return (
    <div className='home_new_feed'>
         <Header/>
        <CreatePost/>
        <div className="post_list_home">
          <Post/>
          <Post/>
          <Post/>
        </div>

    </div>
  )
}

export default NewFeed
