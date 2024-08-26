import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileField } from '../redux/slice/editProfileSlice';
import { useNavigate } from 'react-router-dom';
import '../css/EditProfile.css';

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.editProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfileField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the profile info, like an API call
    console.log('Profile updated:', profile);
    // Navigate to another page or show a success message
  };

  const handleChangePasswordClick = () => {
    navigate('/edit/change_password');
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={profile.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Save Changes
        </button>
        <button
          type="button"
          className="change-password-button"
          onClick={handleChangePasswordClick}
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
