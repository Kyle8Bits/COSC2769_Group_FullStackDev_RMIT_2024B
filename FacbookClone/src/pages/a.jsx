// src/pages/Profile.jsx
import React from 'react';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile_page">
            <div className="cover_user_detail">
                {/* Cover Section */}
                <div className="cover_img">
                    <img src="./src/assets/cover_img.jpg" alt="Cover" />
                </div>

                {/* Profile Picture and User Info Section */}
                <div className="profile_info">
                    <div className="profile_pic_container">
                        <img src="./src/assets/profile_img.jpg" alt="Profile" className="profile_pic" />
                    </div>
                    <div className="user_detail">
                        <h2>Tung Nguyen Chau</h2>
                        <p>182 friends</p>
                    </div> 
                    <div className="profile_action">
                        <button className="add_story_button">+ Add New Story</button>
                        <button className="edit_profile_button">Edit Profile</button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="profile_tabs">
                    <div className="tab active">Bài viết</div>
                    <div className="tab">Giới thiệu</div>
                    <div className="tab">Bạn bè</div>
                    <div className="tab">Ảnh</div>
                    <div className="tab">Video</div>
                    <div className="tab">Reels</div>
                    <div className="tab">Xem thêm</div>
                </div>
            </div>

            {/* Content Section */}
            <div className="profile_content_container">
                <div className="profile_content_wrapper">
                    {/* Left side: User Info */}
                    <ul className="profile_user_info">
                        <li>💼 Làm việc tại RMIT Student Ambassadors Team - S.A.T</li>
                        <li>🎓 Học Software Engineering tại RMIT University Vietnam</li>
                        <li>🎓 Đã học tại Trường THCS/THPT Tây Úc (WASS)</li>
                    </ul>
                    
                    {/* Right side: User Content */}
                    <div className="profile_user_content">
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                        <p>Profile content goes here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
