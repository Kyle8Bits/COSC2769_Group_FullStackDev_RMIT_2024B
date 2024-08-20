import React from 'react';
import '../css/post.css';
import avatar from '../image/avatar.jpg';
import content from '../image/post.jpg';

function Post() {
  return (
    <div className='post_container'>
        <div className="post_author">

            <div class="avatar-wrapper">
                <img src={avatar} alt="" className="avatar" />
            </div>
            <div className='text_container'>
                <h2 className="name">Mai Dang Khoa</h2>
                <h3 className="date">19 August 2024</h3>
            </div>

        </div>
        <div className="post_caption">
            <p>
            Fact about Crab <br />
                1. This is a Crab <br />
                2. This crab can swim
            </p> 
        </div>

        <div className="post_content">
            <img src={content} alt="" />
        </div>
        
        <div className="post_count">
            <h5 className='like'>500 likes</h5>
            <h5 className='cmt'>400 comments</h5>
        </div>

        <div className="post_react">
            <i class="ri-thumb-up-line"></i>
            <i class="ri-share-forward-line"></i>
            <i class="ri-chat-3-line"></i>
        </div>

    </div>
  );
}

export default Post