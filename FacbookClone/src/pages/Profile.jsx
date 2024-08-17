import React from 'react'


export default function Profile() {
    return (
        <div className="profile_page">
            
            <div className="cover_user_detail">
                {/* cover */}
                <div className="cover_img">
                    <img src="./src/assets/cover_img.jpg" alt="Cover" />
                </div>

                {/* profile pic and user info */}
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

                {/* Navigation Tabs 
                tesing*/}
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
            {/* Content Section 
            tesing*/}
            <div className="profile_content_container">

                {/* Left side: info */}
                <ul className="profile_user_info">
                    <li><h2>Giới Thiệu</h2></li>
                    <li>💼 Làm việc tại RMIT Student Ambassadors Team - S.A.T</li>
                    <li>🎓 Học Software Engineering tại RMIT University Vietnam</li>
                    <li>🎓 Đã học tại Trường THCS/THPT Tây Úc (WASS)</li>
                    <li><button className="edit_profile_button">Edit</button></li>
                </ul>
                
                {/* Right side: user */}
                <div className="profile_user_content">
                    {/* Content related to the selected tab will be displayed here */}
                    <p>Profile content goes here...</p>
                    
                </div>
            </div>
        </div>    
    );
}