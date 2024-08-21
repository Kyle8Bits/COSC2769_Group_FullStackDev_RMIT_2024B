import React from 'react'
import CreatePost from '../components/shared/CreatePost'
import Header from '../components/shared/Header'
import '../css/newfeed.css'
import Post from '../components/shared/Post.jsx'


import avatar from '../image/avatar.jpg'
import friend3 from '../image/friend3.png'
import friend4 from '../image/friend4.png'
import Unknown from '../image/logo.png' 

import post1 from '../image/post1.png'
import post2 from '../image/post2.png'
import post3 from '../image/post3.png'
import post4 from '../image/post4.png'
import post5 from '../image/post5.png'



function NewFeed() {
  return (
    <div className='home_new_feed'>
         <Header/>
        <CreatePost/>
        <div className="post_list_home">
          <Post author_avatar={friend3} author_name={"Cristiano Rolnado"} photo={post1} caption={"Check out my brand new Youtube Channel \n Subcribe now"}/>
          <Post author_avatar={Unknown} author_name={"CrabNest"} photo={post2} caption={"Say hello to our mascot, the crab  \n Sign up now"}/>
          <Post author_avatar={friend4} author_name={"Lionel Messi"} photo={post3} caption={"Momment \n #worldcup2022"}/>
          <Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post4} caption={"So they really make you build a Facebook"}/>
          <Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post5} caption={"Damn, my friends are exhausted from deadlines."}/>

        </div>

    </div>
  )
}

export default NewFeed
