import React, { useState } from 'react'
import '../../css/createpost.css'

function CreatePost() {

    const [postAction,setPostAction] = useState(false)

  return (
    <div className='create_post_container'>
        <div className="create_button" onClick={()=>setPostAction(true)}>
            <i class="ri-add-circle-fill"></i>
            Create Post
        </div>

        {postAction?<>
            <div className="create_post_frame" >
                <div className="frame">
                    <textarea className="caption_input" placeholder='Whats on your mind...' />

                    <div className="upload-container">
                        <label className="upload-label" htmlFor="file-upload">
                            <i className="ri-camera-line"></i> Add photo
                            <input id="file-upload" type="file" className="file-input" accept="image/*" />

                        </label>
                    </div>

                    <div className='post_button'>
                        <button onClick={()=> setPostAction(false)}>Cancel</button>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </>:<></>}


    </div>
  )
}

export default CreatePost