import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
// import Logo from '../navigation/Logo.png';


const Navigation = () => {
    return(
        <div className='nav-bar'>
        <div>
        {/* <img className='register-img'
        src={book}
        alt={'Apple on top of books'} /> */}
        </div>
      <NavLink className='link' exact to='/signup'>SignUp</NavLink> 
      <NavLink className='link' exact to='/'>LogIn</NavLink>
      <NavLink  className='link' exact to='/admin-form'>Admin Form</NavLink>
      <NavLink className='link' exact to='/protected'>Schools</NavLink>
        </div>
    )
}






export default Navigation;