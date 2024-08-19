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
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">Facebook</div>
        <div className="title">
          Facebook helps you connect and share <br></br>with the people in your
          life.
        </div>
      </div>
      <div className="loginContainer">
        <div className="logindetail">
          <input type="email" placeholder="Email address or Phone Number" />
          <br></br>
          <input type="Password" placeholder="Password" />
          <br></br>
          <button className="btn">
            {/* <Link to="/HeaderArea">LogIn</Link> */}
          </button>
        </div>
        <div className="forget">
          <a href="forget">Forgotten account?</a>
          <br></br>
        </div>
        <div className="create">
          <br></br>
          <button className="btns">Create New Account</button>
        </div>
        <p></p>
        <br></br>
        <div className="page">
          <a href="createpage">Create a Page </a> for a celebrity, band or
          business.
        </div>
      </div>
    </div>
  );
};

export default Login;
