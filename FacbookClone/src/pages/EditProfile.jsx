import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/editprofile.css';
import { NavLink } from 'react-router-dom';
import { updateProfile } from '../redux/slice/editProfileSlice';

import fallback from '../image/default-avatar.jpg'

const EditProfile = () => {

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.editProfile);
  const profile = useSelector((state) => state.profile);

  
  const [formData, setFormData] = useState({
      username: profile.username,
      fullName: profile.fullName,
      email: profile.email,
      phone: profile.phone,
      bio: profile.bio,
      avatar: profile.avatar, // For handling avatar file
  });

  const [preview, setPreview] = useState(formData.avatar);


  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
      setFormData((prevData) => ({ ...prevData, avatar: e.target.files[0] }));
      console.log(e.target.files[0] );
      setPreview(e.target.files[0]);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      for (const key in formData) {
          data.append(key, formData[key]);
      }
      dispatch(updateProfile(data));
  };

  const handleImageClick = () => {
    document.getElementById('file-input').click(); // Trigger the file input click
};

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>

      <div className="profile-picture-edit">
        <img 
            src={preview ===""? fallback : preview}
            alt="Profile" 
            className="profile-img-current" 
            onClick={handleImageClick} 
            style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate the image is clickable
        />
        <input 
            type="file" 
            id="file-input" 
            onChange={handleFileChange} 
            style={{ display: 'none' }} // Hide the file input
        />
        </div>

      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            className='text-input'
            type="text"
            id="fullname"
            value={formData.fullName}
            onChange={handleChange}
            name="fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className='text-input'
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className='text-input'
            value={formData.phone}
            type="text"
            id="phoneNumber"
            onChange={handleChange}
            name="phoneNumber"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <input
            className='text-input'
            type="text"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            name="bio"
          />
        </div>
        
        <button type="submit" className="submit-button">
          Save Changes
        </button>
        <NavLink to={`/@${"kyle_mai"}/edit/change_pass`}>
          <button
            type="button"
            className="change-password-button">
            Change Password
          </button>
        </NavLink>
        {status === 'loading' && <p>Updating...</p>}
        {status === 'succeeded' && <p>Profile updated successfully!</p>}
        {status === 'failed' && <p>Error: {error}</p>}
      </form>
    </div>
    </div>

  );
};

export default EditProfile;
