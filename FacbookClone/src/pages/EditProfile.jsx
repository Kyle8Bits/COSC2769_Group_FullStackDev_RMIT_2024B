import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/editprofile.css';
import { NavLink } from 'react-router-dom';
import { updateProfile } from '../redux/slice/editProfileSlice';

const EditProfile = () => {

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.editProfile);
  const profile = useSelector((state) => state.profile);

  const [upload,setUpload] = useState("");
  const [banner,setBanner] = useState("");

  const [departmentFields, setDepartmentFields] = useState([
    { department: '', input: '' }
  ]);
  
  const [formData, setFormData] = useState({
      username: profile.username,
      fullName: profile.fullName,
      email: profile.email,
      phone: profile.phone,
      bio: profile.bio,
      avatar: profile.avatar, // For handling avatar file
  });

  useEffect(() => {
    if (profile.info && profile.info.length > 0) {
      setDepartmentFields(profile.info.map(info => ({ department: info.role, input: info.place })));
    }
  }, [profile]);

  const handleDepartmentChange = (index, field, value) => {
    const updatedFields = [...departmentFields];
    updatedFields[index][field] = value;
    setDepartmentFields(updatedFields);
  };

  const addNewDepartmentField = () => {
    setDepartmentFields([...departmentFields, { department: '', input: '' }]);
  };

  const removeDepartmentField = (index) => {
    const updatedFields = [...departmentFields];
    updatedFields.splice(index, 1); // Remove the item at the specified index
    setDepartmentFields(updatedFields);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAvatarChange = (e) => {
      setFormData((prevData) => ({ ...prevData, avatar: e.target.files[0] }));
      setUpload(e.target.files[0].name);
      console.log(e.target.files[0]);
  };

  const handleBannerChange = (e) => {
    setFormData((prevData) => ({ ...prevData, banner: e.target.files[0] }));
    setBanner(e.target.files[0].name);
};

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      for (const key in formData) {
          data.append(key, formData[key]);
          console.log(formData[key])
      }

      departmentFields.forEach((field, index) => {
        if (field.department && field.input) { // Only append if both fields are filled
          data.append(`departments[${index}][roles]`, field.department);
          data.append(`departments[${index}][place]`, field.input);
        }
      });
      
      dispatch(updateProfile(data));
  };

  const handleImageClick = () => {
    document.getElementById('file-input1').click(); // Trigger the file input click
  };

  const handleBannerClick = () => {
    document.getElementById('file-input2').click(); // Trigger the file input click
  };
  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>

      <div className="profile-picture-edit">
        <div className="button_image_change">

          <button type='button' onClick={handleImageClick}>Change Avatar</button>

          <button type='button' onClick={handleBannerClick}>Change Banner</button>
        </div>


        <div className="image_name">
          <div className="avatar_name">Avatar: {upload}</div>
          <div className="banner_name">Banner: {banner} </div>
        </div>

        <input 
            name='avatar'
            type="file" 
            id="file-input1" 
            onChange={handleAvatarChange} 
            style={{ display: 'none' }} // Hide the file input
        />

        <input 
            name='banner'
            type="file" 
            id="file-input2" 
            onChange={handleBannerChange} 
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
            name="fullName"
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
            name="phone"
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


        {/* Combo box and input field */}
          {departmentFields.map((field, index) => (
            <div className="department-input-group" key={index} style={{ display: 'flex', 
              width: '100%',
            }}>
              <select
                value={field.department}
                onChange={(e) => handleDepartmentChange(index, 'department', e.target.value)}
                className="department-select"
              >
                <option value="">Roles</option>
                <option value="Work at">Work at</option>
                <option value="Study at">Study at</option>
              </select>

              <input
                type="text"
                placeholder="Location of your role here"
                value={field.input}
                onChange={(e) => handleDepartmentChange(index, 'input', e.target.value)}
                className="text-input"
                style={{ marginLeft: '10px', width: '100%' }}
              />

                {/* "-" button to remove a department field */}
              <button
                type="button"
                onClick={() => removeDepartmentField(index)}
                className="remove-department-button"
                style={{ marginLeft: '10px', width: '100px' }}
              >
                Remove
              </button>
            </div>


          ))}

          <button
            type="button"
            onClick={addNewDepartmentField}
            className="add-department-button"
          >
            Add Another Department
          </button>
        


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
        {status === 'failed' && <p>Error: The image must be JPG, JPEG, PNG only</p>}
      </form>
    </div>
    </div>

  );
};

export default EditProfile;
