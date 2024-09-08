import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ManageMember from './ManageMember';
import { useParams } from 'react-router-dom';
import { getMembers, kickMember } from '../../redux/slice/groupSlice';
import '../../css/adminGroupNav.css'

function GroupAdminUser() {

    const dispatch = useDispatch();
    const {groupId} = useParams();

    const {member,currentGroup} = useSelector(state=>state.group)

    useEffect(()=>{
        dispatch(getMembers({groupId: groupId}))
    },[groupId]);


    
    const nonAdminMembers = member.filter(member => !currentGroup.admins.includes(member.username));

    const handleKick = async (username)=>{
        await dispatch(kickMember({groupId: groupId, username: username}))
        dispatch(getMembers({groupId: groupId}))
    }

    const displayMembers = nonAdminMembers.map((member)=>{ 
        return(
            <div className="aMember">
                  <ManageMember username={member.username} name={member.fullName} avatar={member.avatar}/>
                  <i class="ri-logout-circle-r-line" onClick={() => handleKick(member.username)}></i>
            </div>

        )
    })

  return (
    <div className='member_group_list'>
        <div className="display_group_member">
            {displayMembers}
        </div>
    </div>
  )
}

export default GroupAdminUser