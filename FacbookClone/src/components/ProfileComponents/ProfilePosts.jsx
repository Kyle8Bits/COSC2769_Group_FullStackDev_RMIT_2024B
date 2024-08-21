import React from 'react'
import Post from '../shared/Post'
import '../../css/profilenavigate.css'

import post4 from '../../image/post4.png'
import post5 from '../../image/post5.png'

import avatar from '../../image/avatar.jpg'


function ProfilePosts() {
  return (
    <div className='profile_posts_container'>
      <ul className='profile_post_list'>
        <li><Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post4} caption={"So they really make you build a Facebook"}/></li>
        <li><Post author_avatar={avatar} author_name={"Mai Dang Khoa"} photo={post5} caption={"Damn, my friends are exhausted from deadlines."}/></li>
      </ul>
    </div>
  )
}

export default ProfilePosts
