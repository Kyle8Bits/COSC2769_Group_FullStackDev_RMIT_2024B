import React, { useEffect } from 'react'
import '../../css/groupDisplay.css'
import ManageGroup from '../AdminComponents/ManageGroup'
import { useNavigate } from 'react-router-dom'
import { fetchGroupsForUser } from '../../redux/slice/groupSlice'
import { useDispatch, useSelector } from 'react-redux'

function GroupDisplay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.profile);

  const {groups} = useSelector(state => state.group); 

  useEffect(()=>{
    dispatch(fetchGroupsForUser({username: username}));
  },[])

  const yourGroup =  groups.map((group, index)=>{
    return(
      <ManageGroup 
      key={index} 
      groupID={group.id}
      groupName={group.name}
      banner={group.banner}
      description={group.description}
      status={false} />
    )
  })

  return (
    <div className='group_display_container'>
        <div className="the_hover_button">
         YOUR GROUP 
          <i class="ri-arrow-left-s-fill"></i>
        </div>

        <div className="group_list_display">
          <button onClick={()=> navigate('/group/create_group')} id='create_group_req'>Create Group</button>
          {yourGroup}

        </div>
    </div>
  )
}

export default GroupDisplay