import React, { useState } from 'react';
import '../css/createGroup.css'
import logo from '../image/logo.png'
import { createGroup } from '../redux/slice/groupSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function GroupCreate() {
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.profile);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [groupPrivacy, setGroupPrivacy] = useState('public');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    dispatch(createGroup({ groupName, groupDescription, groupPrivacy, username }));

    console.log({
      groupName,
      groupDescription,
      groupPrivacy,
    });
  };

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
    </div>
    </div>
    
  );
}

export default GroupCreate;