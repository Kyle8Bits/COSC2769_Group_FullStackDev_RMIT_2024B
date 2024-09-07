import React, {useState, useEffect} from 'react'
import '../css/changepassword.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { changePassword, resetStatus } from '../redux/slice/loginSlice'

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {username} = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { changePasswordStatus,  changePasswordError } = useSelector((state) => state.auth);

  useEffect(() => {
    // Reset status when the component mounts
    dispatch(resetStatus());
}, [dispatch]);


useEffect(() => {
  if (changePasswordStatus === 'succeeded') {
      const timer = setTimeout(() => {
          navigate('/home');
      }, 2000);

      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(timer);
  }
}, [changePasswordStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    const credentials = {
      username: username,  // Replace with the actual username
      oldPassword: oldPassword,
      newPassword: newPassword
    };

    dispatch(changePassword(credentials));
  };

  return (
    <div className="change_password_page">
      <div className="change_password_container">
        <div className="cpw_header">Change Password</div>
          
        <form onSubmit={handleSubmit} className="cp_input">

          <div className="old_password">
            <input
              className='input'
              type="password"
              placeholder='Old Password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="new_password">
            <input
              className='input'
              type="password"
              placeholder='New Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="confirm_password">
            <input
              className='input'
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="btn_chang_pass" style={{display:'flex', gap:'20px'}}>
            <button onClick={()=> navigate(`/@${username}/edit`)}>Cancle</button>
            <button type='submit'>Confirm Change</button>
          </div>

        </form>

        {changePasswordStatus === 'loading' && <p>Changing password...</p>}
        {changePasswordStatus === 'failed' && <p>{changePasswordError}</p>}
        {changePasswordStatus === 'succeeded' && <p>Password changed successfully!  Redirecting...</p>}

      </div>
    </div>
  );
}

export default ChangePassword;