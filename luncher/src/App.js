import React, { Component } from 'react';
import './App.css';
//add router//
import { Route, NavLink, Link } from 'react-router-dom';

//add components//
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';
import AdminForm from './components/Admin form/AdminForm';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='nav-bar'>
      <NavLink exact to='/'>LogIn</NavLink>
      <NavLink exact to='/signup'>SignUp</NavLink>
      <NavLink exact to='/login/admin-form'>Admin Form</NavLink>
      </div>
      <Route exact path='/' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/login/admin-form' component={AdminForm} />
       </div>
    );
  }
}

export default App;

//need to protect admin page and add authentication for it 