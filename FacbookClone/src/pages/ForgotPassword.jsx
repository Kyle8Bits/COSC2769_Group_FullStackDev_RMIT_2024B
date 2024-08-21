import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/forgotpassword.css'

function ForgotPassword() {
  
  const [codes, setCodes] = useState(Array(6).fill(""));
  const [emailVerify, setEmailVerify] = useState(false);

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      // Automatically focus the next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codes[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(pasteData)) {
      const newCodes = pasteData.split("");
      setCodes(newCodes);

      // Automatically focus the last input
      const lastInput = document.getElementById("code-5");
      if (lastInput) {
        lastInput.focus();
      }
    }
    e.preventDefault();
  };

  return (
    <div className="forgot_password_page">
        <div className="fgp_container">

          <div className="fgp_header">
            <div className="text_fgp">Forgot Password</div>
            <div className="underline_fgp"></div>
          </div>

          {emailVerify===!true?<>
            <div className="fgp_input">
                <div className="recover_email">
                <i class="ri-mail-fill"></i>
                <input className='rce_input' type="text" placeholder='Email'/>
                </div>
            </div>
          </>:<></>}

          {emailVerify===true?<> 
            <div onPaste={handlePaste} className="recover_code" >
            {codes.map((code, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={code}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div></>:<></>}

            {emailVerify===true?<>
              <div className="back" onClick={()=>setEmailVerify(false)}>
                <i class="ri-arrow-left-line"></i>
                <h3>Back</h3>
              </div>

              <Link to='/change_password'>
                <div className="change_password">
                  <button>
                    Change Password
                  </button>
                </div>
            </Link>
            </>:<></>}

            <Link className='back_to_login' to={'/'} >
            <i class="ri-arrow-left-line"></i>
            Back To Login</Link>

            {emailVerify===!true?<>
              <div className="get_code" onClick={()=>setEmailVerify(true)}>
                <h3>Get Code</h3>
                <i class="ri-arrow-right-line"></i>
              </div>
            </>:<></>}

        </div>
    </div>
  )
}

export default ForgotPassword