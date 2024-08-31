import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ObjectCard from '../shared/ObjectCard'
import '../../css/adminnavigate.css'
import { getActiveUsers } from '../../redux/slice/activeUserSlice'
import ManageUser from './ManageUser'

function AdminSuspend() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getActiveUsers())
  },[])

  const { activeUsers } = useSelector(state => state.active)

  const displayActive = activeUsers.map(u=>{
    return(
      <ManageUser username={u.username} name={u.fullName} avatar={u.avatar} isban={u.isSuspended}/>
    )
  })

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
    <div className="display_active_user">
      {displayActive}
    </div>


    </div>
  )
}

export default AdminSuspend