import React, { useEffect, useState } from 'react'
import '../../css/adminGroupNav.css'
import { getAdmins, fetchGroupById } from '../../redux/slice/groupSlice';
import ObjectCard from '../shared/ObjectCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { editBanner } from '../../redux/slice/groupSlice';

function GroupAdminEdit() {
  const dispatch = useDispatch();
  const {currentGroup, admins} = useSelector(state=>state.group);

  const [remove_admin, setRemoveAdmin] = useState("Edit Group Admins");


  useEffect(()=>{
    dispatch(getAdmins({groupId: currentGroup.id}))
  },[])

  const currentAdmins = admins.map(admin=>{
    return (
      <div id="admin_action_delete">

        {remove_admin==="Edit Group Admins"?
        <></>
        :
        <>
          <button id="remove_admin">Remove</button>
        </>}

        <ObjectCard
        key={admin.username}
        name={admin.fullName}
        usernameCard={admin.username}
        isSearchingBar={true}
        img={admin.avatar}
        />
      </div>

    )
  })

  const handleRemoveAdmin = ()=>{
    if(remove_admin==="Edit Group Admins"){
      setRemoveAdmin("Done");
    }
    else if(remove_admin==="Done"){
      setRemoveAdmin("Edit Group Admins");
    }
  }

  const handleBannerChangeClick = () => {
    document.getElementById('file-input2').click(); 
  }

  const handleBannerChange = async (e) => {
    await dispatch(editBanner({groupId: currentGroup.id, banner: e.target.files[0]}))
    dispatch(fetchGroupById({groupId: currentGroup.id}))
  }

  return (
    <div id="edit_group_information">
      <input 
            name='banner'
            type="file" 
            id="file-input2" 
            style={{ display: 'none' }}
            onChange={handleBannerChange} 
        />
      <button onClick={handleBannerChangeClick}>Edit Banner</button>
      
      
      <img src={`http://localhost:1414${currentGroup.banner}`} alt="" id='preview_group_banner'/>
      
      
      <button onClick={handleRemoveAdmin}>{remove_admin}</button>
      <div id="list_of_admin">
          {currentAdmins}
      </div>

  </div>
  )
}

export default GroupAdminEdit
