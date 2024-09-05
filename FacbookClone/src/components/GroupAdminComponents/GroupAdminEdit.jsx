import React, { useEffect, useState } from 'react'
import '../../css/adminGroupNav.css'
import { getAdmins, fetchGroupById, editBanner, removeAdmin, addAdmin } from '../../redux/slice/groupSlice';
import ObjectCard from '../shared/ObjectCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import e from 'cors';

function GroupAdminEdit() {
  const {groupId} = useParams();

  const dispatch = useDispatch();
  const {currentGroup, admins} = useSelector(state=>state.group);

  const [removeadmin, setRemoveAdmin] = useState("Edit Group Admins");


  const currentAdmins = admins.map(admin=>{
    return (
      <div id="admin_action_delete">

        {removeadmin==="Edit Group Admins"?
        <></>
        :
        <>
          <button type='button' id="remove_admin" onClick={()=>deleteAdmin(admin.username)}>Remove</button>
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
    if(removeadmin==="Edit Group Admins"){
      setRemoveAdmin("Done");
    }
    else if(removeadmin==="Done"){
      setRemoveAdmin("Edit Group Admins");
    }
  }

  const handleBannerChangeClick = () => {
    document.getElementById('file-input2').click(); 
  }

  const handleBannerChange = async (e) => {
    await dispatch(editBanner({groupId: currentGroup.id, banner: e.target.files[0]}))
    dispatch(fetchGroupById({groupId: groupId}))
  }

  const handleAddAdmin = async () => {
    const username = document.getElementById('search_admin').value;
    if(username===""){
      alert("Please input username");
    }
    else {  
      await dispatch(addAdmin({ groupId: currentGroup.id, username: username }));
      dispatch(getAdmins({ groupId: groupId }));
      document.getElementById('search_admin').value = "";
      alert("Successfully add new admin");

    }

  }

  const deleteAdmin = async (username) =>{
    await dispatch(removeAdmin({groupId: currentGroup.id, username: username}))
    dispatch(getAdmins({groupId: groupId}))
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
      
      
      <button onClick={handleRemoveAdmin}>{removeadmin}</button>
      {removeadmin==="Done"?
      <>
      <button type='button' id="add_admin" onClick={()=>handleAddAdmin()}>Add Admin</button>
      <input type="text" placeholder="Input username" id="search_admin"/>
      </>
      :
      <>
      </>}



      <div id="list_of_admin">
          {currentAdmins}
      </div>


  </div>
  )
}

export default GroupAdminEdit
