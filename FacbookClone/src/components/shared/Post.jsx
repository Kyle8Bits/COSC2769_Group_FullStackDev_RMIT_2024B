import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../../css/post.css'
import { fetchPosts,addPost } from '../../redux/slice/postSlice';
import CommentBox from './CommentBox';
import { deletePost } from '../../redux/slice/adminSlice';

function Post({post, author_avatar, author_name, photos, caption}) {
    const dispatch = useDispatch();
    const [cmtAction, setcmtAction] = useState(false)

    const handleDeletePost = () => {
        dispatch(deletePost(post._id));
    }

    const getImageContainerClass = () => {
        if (photos.length === 1) return 'full-width';
        if (photos.length === 2) return 'half-width';
        if (photos.length >= 3) return 'grid-layout';
        return '';
    };
  return (
    <div className='post_container'>
        <div className="post_author" onClick={()=> setcmtAction(false)}>

            <div class="avatar-wrapper">
                <img src={author_avatar} alt="" className="avatar" />
            </div>
            <div className='text_container'>
                <h2 className="name">{author_name}</h2>
                <h3 className="date">19 August 2024</h3>
            </div>
            {isAdmin && <div className='delete_post_button' onClick={handleDeletePost}>
                Delete Post
            </div>}
            

        </div>
        <div className="post_caption">
            <p>
                {caption}
            </p> 
        </div>

        <div className={`post_content ${getImageContainerClass()}`}>
                {photos && photos.length > 0 && (
                    photos.map((photo, index) => (
                        <img key={index} src={`http://localhost:1414${photo}`} alt={`Post image ${index + 1}`} className="post-image"/>
                    ))
                )}
            </div>
        
        <div className="post_count">
            <h5 className='like'>500 likes</h5>
            <h5 className='cmt'>400 comments</h5>
        </div>

        <div className="post_react">
            <i class="ri-thumb-up-line"></i>
            <i class="ri-share-forward-line"></i>
            <i class="ri-chat-3-line" onClick={() => setcmtAction(true)}></i>
        </div>
        
        {cmtAction===true?<><CommentBox/>
        </>:<></>}

    </div>
  );
}

export default Post