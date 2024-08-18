import React from 'react'
import ProfileHeaders from './ProfileHeaders.jsx'


export default function About() {
    return (
        <>
            <ProfileHeaders />
        
            <div className="profile_about_container">
                <ul className="profile_user_about">
                    <li><h2>Profile Detailed Information</h2></li>
                    <li><h3>Personal Info</h3></li>
                    <li>Full name: Chau Tung Nguyen</li>
                    <li>Birthday: 02/10/2004</li>
                    <li>Location: HCM City</li>
                    <li>Email: ctungnguyen@gmail.com</li>
                    <li>Phone: 0938724005</li>
                    <li><h3>Work & Education</h3></li>
                    <li>💼 Làm việc tại RMIT Student Ambassadors Team - S.A.T</li>
                    <li>🎓 Học Software Engineering tại RMIT University Vietnam</li>
                    <li>🎓 Đã học tại Trường THCS/THPT Tây Úc (WASS)</li>
                    <li><button className="edit_profile_button">Edit details</button></li>
                </ul>
            </div>
        </>
            
    );
}