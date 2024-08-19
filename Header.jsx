// Header.jsx
import React from 'react';
import './Header.css'; // Assuming you have some CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img src="facebook-logo.png" alt="Facebook Logo" className="header__logo" />
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search Facebook" className="header__search" />
            </div>
            <div className="header__right">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/settings">Settings</a>
                </nav>
                <img src="user-profile-icon.png" alt="User Profile" className="header__profile" />
            </div>
        </header>
    );
};

export default Header;