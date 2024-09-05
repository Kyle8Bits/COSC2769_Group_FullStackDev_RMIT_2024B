import React from 'react'
import '../../css/adminGroupNav.css'
import {useSelector} from 'react-redux'


function GroupAdminApprove() {
  const { currentGroup } = useSelector(state => state.group);

  const waitList = currentGroup.waitlist.map(w => {
    return(
      <h1>{w}</h1>
    )
  })
  return (
    <div  id='admin_group_approve'>

            <div id="waitlist_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div id="search_waitlist_result">

        </div>
        
        <div id='wait_list_container'>
            <div id="waitlist">
              {waitList}
            </div>
        </div>

    </div>
  )
}

export default GroupAdminApprove
