import React from 'react';
import './Loginform.css';
import { FaUser,FaLock } from "react-icons/fa";

export const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1> Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUser className = 'icon' />
            </div>            
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
                <FaLock className = 'icon' />
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"/>Remember me </label>
                <a href="#"> Forgot Password??</a>
            </div>
            <button type="submit">Login</button>
            <div class="register-link">
                <p>Dont have an Account?? <a href="#">Register Here!!</a></p>
            </div>
        </form>
    </div>
  )
}
export default Loginform;