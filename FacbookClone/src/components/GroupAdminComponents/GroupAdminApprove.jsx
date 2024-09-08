import React from 'react'
import '../../css/adminGroupNav.css'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import ObjectCard from '../shared/ObjectCard';
import { acceptJoiningRequest, rejectJoiningRequest, getPendingMembers } from '../../redux/slice/groupSlice';

function GroupAdminApprove() {

  const dispatch = useDispatch();

  const pendingMembers = useSelector(state => state.group.currentGroup.pendingMembers);
  const {groupId} = useParams();



  const handleAccpet = async (username) => {
    await dispatch(acceptJoiningRequest({groupId: groupId , username}));
    dispatch(getPendingMembers({groupId: groupId}));

  }

  const handleReject = async (username) => {
    await dispatch(rejectJoiningRequest({groupId: groupId , username}));
    dispatch(getPendingMembers({groupId: groupId}));

  }

  const displayWaitList = ()=>{
    if(pendingMembers && pendingMembers.length > 0){
      return (
        <>
          {pendingMembers.map((member) => (
            <div id="anPending">
                <ObjectCard 
                name={member.fullName} 
                img={member.avatar} 
                usernameCard={member.username}
                isSearchingBar={true}
                />

                <div id="approve_btn">
                <i onClick={()=>handleAccpet(member.username)} class="ri-check-line"></i>
                <i onClick={()=>handleReject(member.username)} class="ri-close-line"></i>
                </div>
            </div>

          ))}
        </>
      );
    }
  }


  return (
    <div  id='admin_group_approve'>

          


        <div id="search_waitlist_result">

        </div>
        
        <div id='wait_list_container'>
            <div id="waitlist">
              {displayWaitList()}
            </div>
        </div>

    </div>
  )
}

export default GroupAdminApprove
