import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'
import logo from '../image/logo.png'
import {useNavigate, NavLink} from 'react-router-dom'
import { loginUser } from '../redux/slice/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // Clear localStorage when the login page is rendered
    localStorage.clear();
    }, []); 
    
  const handleLogin = (e) => {
      e.preventDefault();
      dispatch(loginUser({ username, password }));
  };


  useEffect(() => {
    if (status === 'succeeded' ) {
        navigate('/home'); // or '/' depending on your routes
    }
}, [status, navigate]);

  return (
    <div className='login_page'>

      <div className="login_welcome">
        <h1>Welcome to <br/>
          <span className='crab'>Crab</span><span className='nest'>Nest</span>
        </h1>
        <img src={logo} alt="" />

      </div>

      <div className="login_container">

        <div className="login_header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>

        <div className="login_input">

            <div className="nickname">
              <i class="ri-user-fill"></i>
              <input 
              type="text" className="input" placeholder='Username' 
              onChange={(e)=>setUsername(e.target.value)}
              />
            </div>

          <div className="password">
          <i class="ri-lock-fill"></i>
            <input className='input' type="password" placeholder='Password' 
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          
        </div>
          
        <div className="login_status">{error}</div>

        <div className="forgot-password">Forgot password <Link className='span' to={'/password_recovery'} >Click here</Link></div>
        <div className="login_buttons">

          <NavLink to={'/register'}><button type='button' className='signup'>Sign Up</button></NavLink>
          <button type='button' className='login' onClick={handleLogin} >Login</button>
        </div>

      </div>

    
    </div>

  )
}

export default Login