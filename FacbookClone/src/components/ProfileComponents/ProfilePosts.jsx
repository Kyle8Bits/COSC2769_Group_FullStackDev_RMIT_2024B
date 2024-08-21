import React from 'react'
import Post from '../shared/Post'
import '../../css/profilenavigate.css'
function ProfilePosts() {
  return (
    <div className='profile_posts_container'>
      <ul className='profile_post_list'>
        <li><Post/></li>
        <li><Post/></li>
        <li><Post/></li>
      </ul>
    </div>
  )
}

export default ProfilePosts
