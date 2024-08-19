// Login.jsx
import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  // const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //     setEmailError(''); // Clear error when user starts typing
  // };

  // const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //     setPasswordError(''); // Clear error when user starts typing
  // };

  // const validateEmail = (email) => {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     return emailRegex.test(email);
  // };

  // const validatePassword = (password) => {
  //     return password.length >= 6; // Example: Password must be at least 6 characters long
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let valid = true;

  //     if (!validateEmail(email)) {
  //         setEmailError('Invalid email address');
  //         valid = false;
  //     }

  //     if (!validatePassword(password)) {
  //         setPasswordError('Password must be at least 6 characters long');
  //         valid = false;
  //     }

  //     if (valid) {
  //         // Handle successful login
  //         console.log('Login successful');
  //     }
  // };

  // return (
  //     <div className="login">
  //         <form onSubmit={handleSubmit}>
  //             <div className="login__field">
  //                 <label>Email:</label>
  //                 <input type="email" value={email} onChange={handleEmailChange} />
  //                 {emailError && <span className="error">{emailError}</span>}
  //             </div>
  //             <div className="login__field">
  //                 <label>Password:</label>
  //                 <input type="password" value={password} onChange={handlePasswordChange} />
  //                 {passwordError && <span className="error">{passwordError}</span>}
  //             </div>
  //             <button type="submit">Login</button>
  //         </form>
  //     </div>
  // );

  return (
    <div className="login_page">
        
        <div className="login_container">

            {/* login form, left side */}
            <div className="login_detail">
                <h2>Login Page</h2>
                <input type="email" placeholder="Email address or Phone Number" />
                <input type="Password" placeholder="Password" />
                <button className="log_in_button">
                    Sign In
                    {/* <Link to="/HeaderArea">LogIn</Link> */}
                </button>
            </div>

            <div className="forget">
                <a href="forget_button">Forgotten account?</a>

            </div>
            <div className="create">
                    <button className="create_new_account_button">Create New Account</button>
            </div>
        </div>


        {/* right side */}
        <div className="welcome_container">
            <p className="welcome_text">Welcome to</p>
            <h2 className="title">CrabNest</h2>
            <p className="intro_text">This is a social app can help to connect friends and widen/create your comminity</p>
        </div>
    </div>
  );
};

export default Login;
