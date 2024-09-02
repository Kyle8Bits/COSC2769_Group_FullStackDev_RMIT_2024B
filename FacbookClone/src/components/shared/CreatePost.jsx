import React, { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../../css/createpost.css'
import { addPost, fetchPosts } from '../../redux/slice/postSlice';

function CreatePost() {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.profile)

    const [postAction,setPostAction] = useState(false)

    const [selectedValue, setSelectedValue] = useState('Public');

    const [preview, setPreview] =useState([]);

    const [numberPhoto, setNumberPhoto] = useState(0);

    const getImageContainerClass = () => {
        if (numberPhoto === 1) return 'full-width';
        if (numberPhoto === 2) return 'half-width';
        if (numberPhoto >= 3) return 'grid-layout';
        return '';
    };

    const [formData, setFormData] = useState({
        author: currentUser.username,
        content: '',
        images: [],
        visibility: selectedValue,
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            visibility: value,  // Update formData visibility to match selected value
        }));
    };

    const handleInputContent = (e)=>{
        setFormData((prev)=>({...prev, content: e.target.value}));
    }

    const handleStoreImage = (e) =>{
        const file = e.target.files[0]; // Get the first (and only) file selected
        console.log(file)
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, file], // Append only the file name to the images array
        }));

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview((prev) => [...prev, event.target.result]); // Add new image to preview array
                setNumberPhoto(prev => prev + 1)
            };
            reader.readAsDataURL(file); 
        }

    }

    const handleCancel = () =>{
        setNumberPhoto(0);
        setPreview([]);
        setPostAction(false);
        setFormData(prevFormData => ({
            ...prevFormData,  // Spread the previous state to keep other properties unchanged
            images: []        // Set the images array back to an empty array
        }))
    }


    const handlePost = async (e)=>{
        e.preventDefault();
        const data = new FormData();

        // Append other form fields
        data.append('author', formData.author);
        data.append('content', formData.content);
        data.append('visibility', formData.visibility);
    
        // Append images to the FormData
        formData.images.forEach((image) => {
            data.append('post', image); // Match the 'post' field name here
        });
    
        setNumberPhoto(0);
        setPreview([]);
        setPostAction(false);
        await dispatch(addPost(data));
        dispatch(fetchPosts({currentUser}));
    }

  return (
    <div className='create_post_container'>
        <div className="create_button" onClick={()=>setPostAction(true)}>
            <i class="ri-add-circle-fill"></i>
            Create Post
        </div>

        {postAction?<>
            <div className="create_post_frame" >
                <div className="frame">

                    <div className='visibility_option'>
                        <select id="comboBox" value={selectedValue} onChange={handleChange}>
                        <option value={selectedValue} disabled>
                            {selectedValue}
                        </option>
                        <option value="Public">Public</option>
                        <option value="Friend">Friend</option>
                        </select>
                    </div>
                    
                    <textarea className="caption_input" placeholder='Whats on your mind...' value={formData.content} onChange={handleInputContent} />

                    {numberPhoto!==0 
                    ?
                        <div className= {`image_review ${getImageContainerClass()}`}>
                            {preview.map((src, index) => (
                                <img
                                    className='post-image'
                                    key={index}
                                    src={src}
                                />
                            ))}
                        </div>
                    : 
                    <></>
                    }

                    
                    {numberPhoto < 4?
                    <div className="upload-container">
                        <label className="upload-label" htmlFor="file-upload">
                            <i className="ri-camera-line"></i> Add photo
                            <input id="file-upload" type="file" className="file-input" name="post" accept="image/*" onChange={handleStoreImage}/>

                        </label>
                     </div>
                    :
                    <>
                    <div className="maximum_trigger">
                        <h1>You has reached the maximum number of photo</h1>
                    </div>
                    </> }


                    <div className='post_button'>
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>
        </>:<></>}


    </div>
  )
}

export default CreatePost