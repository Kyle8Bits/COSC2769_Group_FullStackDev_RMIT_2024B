import React from 'react'
import ObjectCard from '../shared/ObjectCard'
import { useSelector } from 'react-redux'
import '../../css/adminnavigate.css'
import ManageGroup from './ManageGroup'

function AdminApprove() {



  return (
    <div  className='admin_approve_container'>
      <div className="approve_search_bar">
            <div className="input_box">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search Group' />
            </div>
      </div>

    <div className="group_list">
      <ManageGroup/>
      <ManageGroup/>
      <ManageGroup/>
      <ManageGroup/>
      <ManageGroup/>
    </div>

    </div>
  )
}

export default AdminApprove