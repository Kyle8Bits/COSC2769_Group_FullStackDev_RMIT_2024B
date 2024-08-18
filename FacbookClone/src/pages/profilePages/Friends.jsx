import React from 'react';
import ProfileHeaders from './ProfileHeaders.jsx';

export default function Friends() {
    return (
        <>
            <ProfileHeaders />

            <div className="profile_friends_container">
                <div className="profile_friend_list">
                    <h2>Friends</h2>
                    <search className="search_bar"><input placeholder="search"></input></search>
                    <div className="friend_item">
                        <img src="/src/assets/friend_1_img.jpg" alt="Ngoc Tran" />
                        <p>Ngoc Tran</p>
                        <button className="unfriend_button">Unfriend</button>
                    </div>
                    <div className="friend_item">
                        <img src="/src/assets/friend_2_img.jpg" alt="Minh Quan" />
                        <p>Minh Quan</p>
                        <button className="unfriend_button">Unfriend</button>
                    </div>
                    <div className="friend_item">
                        <img src="/src/assets/friend_3_img.jpg" alt="An Tuan Luu" />
                        <p>An Tuan Luu</p>
                        <button className="unfriend_button">Unfriend</button>
                    </div>
                    <div className="friend_item">
                        <img src="/src/assets/friend_4_img.jpg" alt="Minh Thanh Le" />
                        <p>Minh Thanh Le</p>
                        <button className="unfriend_button">Unfriend</button>
                    </div>
                    <div className="friend_item">
                        <img src="/src/assets/friend_5_img.jpg" alt="Nguyen Minh" />
                        <p>Nguyen Minh</p>
                        <button className="unfriend_button">Unfriend</button>
                    </div>
                </div>
            </div>
        </>
    );
}
