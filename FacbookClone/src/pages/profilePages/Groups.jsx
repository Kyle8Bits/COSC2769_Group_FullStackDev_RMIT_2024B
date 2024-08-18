import React from 'react'
import ProfileHeaders from './ProfileHeaders.jsx'

export default function Groups() {
    return (
        <>
            <ProfileHeaders />


            <div className="profile_groups_container">
                <div className="profile_group_list">
                    <h2>Groups</h2>
                    <search className="search_bar"><input placeholder="search"></input></search>
                    <div className="group_item">
                        <img src="/src/assets/group_1_img.jpg" alt="Programming World by IdeaToCode" />
                        <p>Programming World by IdeaToCode</p>
                        <button className="leave_group_button">Leave group</button>
                    </div>
                    <div className="group_item">
                        <img src="/src/assets/group_2_img.jpg" alt="Yêu Phim Âu Mỹ" />
                        <p>Yêu Phim Âu Mỹ</p>
                        <button className="leave_group_button">Leave group</button>
                    </div>
                    <div className="group_item">
                        <img src="/src/assets/group_3_img.jpg" alt="GAMING GEAR VN- Chợ Gaming Gear Việt Nam" />
                        <p>GAMING GEAR VN- Chợ Gaming Gear Việt Nam</p>
                        <button className="leave_group_button">Leave group</button>
                    </div>
                </div>
            </div>
        </>
            
    );
}