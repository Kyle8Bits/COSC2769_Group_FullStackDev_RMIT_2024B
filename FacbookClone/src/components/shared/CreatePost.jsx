import React, { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../../css/createpost.css'
import { addPost } from '../../redux/slice/postSlice';

function CreatePost() {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.profile);

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
        author: username,
        content: '',
        images: [],
        visibility: selectedValue,
    })

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleInputContent = (e)=>{
        setFormData((prev)=>({...prev, content: e.target.value}));
    }

    const handleStoreImage = (e) =>{
        const file = e.target.files[0]; // Get the first (and only) file selected

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, file.name], // Append only the file name to the images array
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
                        <option value="" disabled>
                            -- {selectedValue} --
                        </option>
                        <option value="option1">Public</option>
                        <option value="option2">Friend</option>
                        <option value="option3">Private</option>
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
                            <input id="file-upload" type="file" className="file-input" accept="image/*" onChange={handleStoreImage}/>

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
                        <button onClick={()=>dispatch(addPost(formData))}>Post</button>
                    </div>
                </div>
            </div>
        </>:<></>}


    </div>
  )
}

export default CreatePost