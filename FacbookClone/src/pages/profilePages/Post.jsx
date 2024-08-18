import React from 'react'
import ProfileHeaders from './ProfileHeaders';

export default function Post() {
    return (
        <>
            <ProfileHeaders />



            <div className="profile_post_container">
                {/* Left side: info */}
                <ul className="profile_user_info">
                    <li><h2>Intro</h2></li>
                    <li>💼 Làm việc tại RMIT Student Ambassadors Team - S.A.T</li>
                    <li>🎓 Học Software Engineering tại RMIT University Vietnam</li>
                    <li>🎓 Đã học tại Trường THCS/THPT Tây Úc (WASS)</li>
                    <li><button className="edit_profile_button">Edit details</button></li>
                </ul>

                {/* Right side: user */}
                <div className="profile_user_post">
                    {/* Content related to the selected tab will be displayed here */}
                    <p>Profile content goes here...</p>

                </div>
            </div>
        </>    
    );
}