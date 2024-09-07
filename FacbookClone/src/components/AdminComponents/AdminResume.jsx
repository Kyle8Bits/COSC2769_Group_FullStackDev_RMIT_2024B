import React, {useEffect} from 'react'
import ObjectCard from '../shared/ObjectCard'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/adminnavigate.css'
import { getBannedUsers } from '../../redux/slice/banUserSlice'

import ManageUser from './ManageUser'

function AdminResume() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBannedUsers())
  },[])

  const { bannedUsers } = useSelector(state => state.ban)

  console.log(bannedUsers)
  const displayBanned = bannedUsers.map(u=>{
    return(
      <ManageUser username={u.username} name={u.fullName} avatar={u.avatar} isban={u.isSuspended}/>
    )
  })

  return (
    <div  className='admin_resume_container'>



        <div className='resume_list_container'>
            <div className="userlist">

            </div>
        </div>

        <div className="display_ban_user">
          {displayBanned}
        </div>
    </div>
  )
}

export default AdminResume