import React from 'react';
import './component.css';
import avatar from '../assets/avatar.jpg';
import content from '../assets/post.jpg';

function Post() {
  return (
    <div className='container'>
        <div className="author">

            <img src={avatar} alt="" className='avatar'/>
            <div className='text_container'>
                <h2 className="name">Mai Dang Khoa</h2>
                <h3 className="date">19 August 2024</h3>
            </div>

        </div>
        <div className="caption">
            <h3> Fact about Crab <br />
                1. This is a Crab <br />
                2. This crab can swim
            </h3>
        </div>

        <div className="content">
            <img src={content} alt="" />
        </div>
        
        <div className="count">
            <h5 className='like'>500 likes</h5>
            <h5 className='cmt'>400 comments</h5>
        </div>

        <div className="react">
            <i class="ri-thumb-up-line"></i>
            <i class="ri-share-forward-line"></i>
            <i class="ri-chat-3-line"></i>
        </div>

    </div>
  );
}

export default Post