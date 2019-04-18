import React from 'react';
import './SignUp.css';
import { NavLink, Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div>
            <h2>Sign Up for a Luncher Account</h2>
            <div>
            <button>
                
            <Link to='/signup/register'>I am a School Administrator</Link>
            
            </button>
            <button>
                
                 <Link to='/signup/register'>I am a Donor</Link>

                </button>
        </div>    
       <div>
            <p>Already have an account?</p>
            <button>SIGN IN</button>
        </div>

        </div>
    )
}


export default SignUp;