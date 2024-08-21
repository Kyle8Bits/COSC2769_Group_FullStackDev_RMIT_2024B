import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/login.css'
import logo from '../image/logo.png'

function Login() {

  const [action, setAction] = useState("Login");
  

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
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="login_input">
          {action === "Sign Up"?<div>
            <div className="nickname">
              <i class="ri-user-fill"></i>
              <input type="text" className="input" placeholder='Username' />
            </div>
          </div>:<div></div>}

            <div className="email">
              <i class="ri-mail-fill"></i>
              <input className='input' type="text" placeholder='Email'/>
            </div>

          <div className="password">
          <i class="ri-lock-fill"></i>
            <input className='input' type="password" placeholder='Password' />
          </div>
          
        </div>
          
        <div className="forgot-password">Forgot password <Link className='span' to={'/password_recovery'} >Click here</Link></div>

        <div className="login_buttons">
          <button type='button' className={action === "Login"?"signup gray":"signup"} onClick={()=>setAction("Sign Up")}>Sign Up</button>
          <button type='button' className={action === "Sign Up"?"signup gray":"login"}  onClick={()=>setAction("Login")} >Login</button>
        </div>

      </div>

    
    </div>

  )
}

export default Login