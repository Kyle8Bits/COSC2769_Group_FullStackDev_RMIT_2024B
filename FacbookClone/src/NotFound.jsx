import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image/logo.png';
import './css/notfound.css';
import Header from './components/shared/Header'

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className="notfound-container">
      <div className="logo_and_text_container">
        <div className="logo_img">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <h1 className="notfound-title">404</h1>
          <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/home" className="notfound-link">
            <button className="notfound-button">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default NotFound;
