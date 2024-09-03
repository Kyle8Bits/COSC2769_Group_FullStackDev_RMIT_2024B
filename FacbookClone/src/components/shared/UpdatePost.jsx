import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/createpost.css";
import { useNavigate } from "react-router-dom";
import { addPost, fetchPosts } from "../../redux/slice/postSlice";
import { useParams } from "react-router-dom";
import { editCurrentPost, getCurrentPost, deleteCurrentPost } from "../../redux/slice/editPostSlice";

function UpdatePost() {
    const postCurrent = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.profile);
    const {post} = useSelector((state) => state.editPost)
    const [postAction, setPostAction] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Public");
    const [previewName, setPreviewName] = useState([]);
    const [preview, setPreview] = useState([]);

    const [deleteConfirm, setConfirm] = useState(false);

    const [numberPhoto, setNumberPhoto] = useState(0);

    useEffect(()=>{
        const fetchPost = async () => {
            const resultAction = await dispatch(getCurrentPost(postCurrent));
            setSelectedValue(resultAction.payload.visibility);
        
            if (getCurrentPost.fulfilled.match(resultAction)) { 
                setFormData(prev => ({ ...prev, content: resultAction.payload.content, images:[...resultAction.payload.images] }));
            }

            setNumberPhoto(resultAction.payload.images.length)
        };
        
        fetchPost();
    },[])

    
  const getImageContainerClass = () => {
    if (numberPhoto === 1) return "full-width";
    if (numberPhoto === 2) return "half-width";
    if (numberPhoto >= 3) return "grid-layout";
    return "";
  };

  const [formData, setFormData] = useState({
    author: currentUser.username,
    content: "",
    images: [],
    visibility: selectedValue,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      visibility: value, // Update formData visibility to match selected value
    }));

  };

  const handleInputContent = (e) => {
    setFormData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleStoreImage = (e) => {
    const file = e.target.files[0]; // Get the first (and only) file selected
    setPreviewName((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview((prev) => [...prev, event.target.result]); // Add new image to preview array
        setNumberPhoto((prev) => prev + 1);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    
    // Combine preview images with existing images
    const allImages = [...formData.images, ...previewName];
  
    // Create a new FormData instance
    const data = new FormData();
  
    // Append other form fields
    data.append("author", formData.author);
    data.append("content", formData.content);
    data.append("visibility", formData.visibility);
  
    // Append images to FormData
    allImages.forEach((image, index) => {
      data.append(`post`, image); // Ensure your backend can handle this field naming
    });
    
    console.log(allImages)
    console.log(previewName)
    setNumberPhoto(0);
    setPreview([]);
    navigate('/home');


    dispatch(editCurrentPost({postId: postCurrent, data: data}));
    dispatch(fetchPosts({ currentUser }));
  }  


  const handleRemoveImagePrevious = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, index) => index !== indexToRemove),
    }));

    setNumberPhoto(prev => prev -1);
  };

  const handleRemovePreviewImage= (indexToRemove) => {
    setPreview((prevPreview) => prevPreview.filter((_, index) => index !== indexToRemove));
    setNumberPhoto(prev => prev -1);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCurrentPost(postCurrent));
    dispatch(fetchPosts({ currentUser }));
    navigate('/home');
  }



  return (
    <div className="create_post_container">
      <div className="create_post_frame">
        <div className="frame">
          <div className="visibility_option">

            {
            deleteConfirm ? 
                <h1 className="confirm_state">Are you sure you want to delete this post? <i onClick={handleConfirmDelete} class="ri-checkbox-circle-fill"></i><i onClick={()=> setConfirm(false)} class="ri-close-circle-fill"></i></h1>
                :
                <button className="delete_post" onClick={()=> setConfirm(true)}>Delete Post</button>
            }


            <select id="comboBox" value={selectedValue} onChange={handleChange}>
              <option value={selectedValue} disabled>
                {selectedValue}
              </option>
              <option value="Public">Public</option>
              <option value="Friend">Friend</option>
            </select>
          </div>

          <textarea
            className="caption_input"
            placeholder="Whats on your mind..."
            value={formData.content}
            onChange={handleInputContent}
          />


          {numberPhoto !== 0 ? (
            <div className={`image_review ${getImageContainerClass()}`}>
              {preview.map((src, index) => (
                
                <img className="post-image"
                key={index} 
                src={src} 
                alt={`Preview image ${index}`}
                onClick={() => handleRemovePreviewImage(index)} // Add onClick handler
                />
              ))}

          
            {formData.images.map((image, index) => (
                <img 
                    onClick={() => handleRemoveImagePrevious(index)}
                    className="post-image"
                    key={index} 
                    src={`http://localhost:1414${image}`} 
                />
            ))}
            

            </div>
          ) : (
            <></>
          )}


          {numberPhoto < 4 ? (
            <div className="upload-container">
              <label className="upload-label" htmlFor="file-upload">
                <i className="ri-camera-line"></i> Add photo
                <input
                  id="file-upload"
                  type="file"
                  className="file-input"
                  name="post"
                  accept="image/*"
                  onChange={handleStoreImage}
                />
              </label>
            </div>
          ) : (
            <>
              <div className="maximum_trigger">
                <h1>You has reached the maximum number of photo</h1>
              </div>
            </>
          )}

          <div className="post_button">
            <button onClick={()=>navigate('/home')}>Cancel</button>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;
