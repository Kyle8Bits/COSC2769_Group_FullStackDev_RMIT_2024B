import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../shared/UserCard'
import '../../css/adminnavigate.css'
import { fetchUsers } from '../../redux/slice/adminSlice'



function AdminSuspend() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers()).then((result) => {
            console.log('Fetched users:', result.payload); // Check what's returned
        });
    }, [dispatch]);

    // Extract users from the admin state
    const users = useSelector(state => state.admin.users);
    const activeUsers = users.filter(user => !user.isSuspended);
    
    console.log('Users:', activeUsers); // Add this line

    const activeUsersList = activeUsers.map(user => (
        <UserCard
            key={user._id}
            name={user.fullName}
            img={user.avatar}
            userId={user._id}  // Ensure userId is passed correctly
            isSuspended={user.isSuspended}  // Ensure isSuspend is passed correctly
        />
    ));

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
                {activeUsersList}
            </div>
        </div>
    </div>
  )
}

export default AdminSuspend