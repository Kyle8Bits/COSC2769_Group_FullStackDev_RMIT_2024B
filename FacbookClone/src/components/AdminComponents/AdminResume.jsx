import React, { useEffect } from 'react'
import UserCard from '../shared/UserCard'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/adminnavigate.css'
import { fetchUsers } from '../../redux/slice/adminSlice'


function AdminResume() {
    const dispatch = useDispatch();

   
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Extract users from the admin state
    const users = useSelector(state => state.admin.users);
    const suspendedUsers = users.filter(user => user.isSuspended);
    
    const suspendedUsersList = suspendedUsers.map(user => (
        <UserCard
            key={user._id}
            name={user.fullName}
            img={user.avatar}
            userId={user._id}  // Ensure userId is passed correctly
            isSuspended={user.isSuspended}  // Ensure isSuspend is passed correctly
        />
    ));


  return (
    <div  className='admin_resume_container'>
            <div className="resume_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div className='resume_list_container'>
            <div className="userlist">
                {suspendedUsersList}
            </div>
        </div>
    </div>
  )
}

export default AdminResume