import React from 'react'
import ObjectCard from '../shared/ObjectCard'
import { useSelector } from 'react-redux'
import '../../css/adminnavigate.css'


function ProfileAbout() {


  return (
    <div  className='admin_resume_container'>
            <div className="resume_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div className='resume_list_container'>
            <div className="userlist">

            </div>
        </div>
    </div>
  )
}

export default ProfileAbout