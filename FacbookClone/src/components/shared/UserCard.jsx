import React from 'react'
import '../../css/usercard.css'
import { useSelector, useDispatch } from 'react-redux'
import { suspendUser, resumeUser } from '../../redux/slice/adminSlice';


function UserCard({name, img, userId, isSuspended }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);

  const handleSuspendUser = () => {
    if (userId) {
      dispatch(suspendUser(userId));
    } else {
      console.error("User ID is undefined");
    }
  };

  const handleResumeUser = () => {
    if (userId) {
      dispatch(resumeUser(userId));
    } else {
      console.error("User ID is undefined");
    }
  };

  return (
    <div className='user_card_container'>
      <div className="card">
            <img src={img} alt='picture'/>
            <h2 className="user_name">{name}</h2>

            {isSuspended ? (
                <div className="resume_user" onClick={handleResumeUser}>
                <i className="ri-user-minus-fill"/>
                </div>
            ) : (
                <div className="suspend_user" onClick={handleSuspendUser}>
                <i className="ri-user-minus-fill"/>
                </div>
            )}
      </div>
    </div>
  )
}

export default UserCard