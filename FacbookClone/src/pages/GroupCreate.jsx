import React, { useEffect, useState } from 'react';
import '../css/createGroup.css'
import logo from '../image/logo.png'
import { createGroup, resetCreateGroupStatus } from '../redux/slice/groupSlice';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function GroupCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {username} = useSelector(state => state.profile);
  const { createGroupStatus } = useSelector(state => state.group);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [groupPrivacy, setGroupPrivacy] = useState('public');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here


    dispatch(createGroup({ groupName, groupDescription, groupPrivacy, username }));

  };

  useEffect(() => {
    dispatch(resetCreateGroupStatus());
  },[dispatch])

  useEffect(() => {
    if (createGroupStatus === 'success') {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [createGroupStatus, navigate]);


  return (
    <div className="create_group_page">
      <div className='create_group_form'>

      <div className="decorate">
        <img src={logo} alt="" />
        <h2>Create A New Group</h2>
      </div>

      <form onSubmit={handleSubmit}>

        <div className='group_name_input'>
          <label htmlFor="groupName">Group Name:</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </div>

        <div className='group_description'>
          <label htmlFor="groupDescription">Group Description:</label>
          <textarea
            id="groupDescription"
            value={groupDescription}
            onChange={(e) => setGroupDescription(e.target.value)}
            required
          />
        </div>

        <div className='privacy_setting'>
          <label htmlFor="groupPrivacy">Privacy:</label>
          <select
            id="groupPrivacy"
            value={groupPrivacy}
            onChange={(e) => setGroupPrivacy(e.target.value)}
            required
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit">Create Group</button>
      </form>
      {createGroupStatus === 'success' && <p>Create group successful! Redirecting...</p>}
    </div>
    </div>
    
  );
}

export default GroupCreate;