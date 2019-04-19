import React from 'react';
import './SignUp.css';
import { NavLink, Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className='signup'>
            <h2 className='signup-header'>Sign Up for a Luncher Account</h2>
            <div>
            <button className='admin-btn'>
                
            <Link to='/signup/register'>I am a School Administrator</Link>
            
            </button>
            <button className='donor-btn'>
                <Link to='/signup/register'>I am a Donor</Link>
                </button>
        </div>    
       <div className='signup-bottom-div'>
            <p className='signup-paragraph'>Already have an account?</p>
            <button className='signin-btn' >SIGN IN</button>
        </div>

        </div>
    )
}


export default SignUp;