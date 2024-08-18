import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Profile() {
    return (
        <div className="profile_page">
            
            <div className="cover_user_detail">
                {/* cover */}
                <div className="cover_img">
                    <img src="/src/assets/cover_img.jpg" alt="Cover" />
                </div>

                {/* profile pic and user info */}
                <div className="profile_info">
                    <div className="profile_pic_container">
                        <img src="/src/assets/profile_img.jpg" alt="Profile" className="profile_pic" />
                    </div>
                    <div className="user_detail">
                        <h2>Tung Nguyen Chau</h2>
                        <p>182 friends</p>
                    </div> 
                    <div className="profile_action">
                        <button className="add_post_button">+ Add New Post</button>
                        <button className="edit_profile_button">Edit Profile</button>
                    </div>
                </div>

                {/* Navigation Tabs 
                tesing*/}
                <div className="profile_tabs">
                    <div className="tab"><NavLink to="/profile/post" className={({ isActive}) => isActive ? 'tab active' : 'tab'}>Posts</NavLink></div>
                    <div className="tab"><NavLink to="/profile/about" className={({ isActive}) => isActive ? 'tab active' : 'tab'}>About</NavLink></div>
                    <div className="tab"><NavLink to="/profile/friends" className={({ isActive}) => isActive ? 'tab active' : 'tab'}>Friends</NavLink></div>
                    <div className="tab"><NavLink to="/profile/groups" className={({ isActive}) => isActive ? 'tab active' : 'tab'}>Groups</NavLink></div>
                </div>
            </div>        
        </div>    
    );
}