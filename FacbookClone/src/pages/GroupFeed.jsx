import React from 'react'
import Post from '../components/shared/Post'
import '../css/group.css'
import Header from '../components/shared/Header'
import CreatePost from '../components/shared/CreatePost'
import { useParams } from 'react-router-dom'

function GroupFeed() {
  const {groupId} = useParams()
  console.log(groupId)
  return (
    <>
    <Header/>
    <div className='group_container_feed'>
      <div className="group_banner_feed">
        <img alt="" />
      </div>

      <div className="group_info_feed">

        <div>
          <h1 className="name">Software Engineering Community</h1>

          <div className="property">
              <h5>Private <i class="ri-lock-line"></i></h5>
          </div>
        </div>


        <div className='button'>
          <button className="join">  <i class="ri-login-box-line"></i> Join </button>
          <button className="invite"> <i class="ri-add-box-line"></i> Invite</button>
          <button className="setting"> <i class="ri-tools-fill"></i> Admin</button>
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