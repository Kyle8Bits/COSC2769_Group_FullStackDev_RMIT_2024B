import React from 'react'
import { useSelector } from 'react-redux'
import ObjectCard from '../shared/ObjectCard'
import '../../css/adminnavigate.css'


function ProfileAbout() {


  return (
    <div  className='admin_suspend_container'>

            <div className="suspend_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div className='suspend_list_container'>
            <div className="userlist">

            </div>
        </div>
    </div>
  )
}

export default ProfileAbout