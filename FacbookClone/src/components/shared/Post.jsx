import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../../css/post.css'
import { fetchPosts,addPost } from '../../redux/slice/postSlice';
import CommentBox from './CommentBox';

function Post({author_avatar, author_name, photo, caption}) {

    const [cmtAction, setcmtAction] = useState(false)


  return (
    <div className='post_container'>
        <div className="post_author" onClick={()=> setcmtAction(false)}>

            <div class="avatar-wrapper">
                <img src={`data:image/jpg;base64,${author_avatar}`} alt="" className="avatar" />
            </div>
            <div className='text_container'>
                <h2 className="name">{author_name}</h2>
                <h3 className="date">19 August 2024</h3>
            </div>

        </div>
        <div className="post_caption">
            <p>
                {caption}
            </p> 
        </div>

        <div className="post_content">
            <img src={`data:image/jpg;base64,${photo}`} alt="" />
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