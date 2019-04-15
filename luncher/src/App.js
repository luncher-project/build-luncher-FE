import React, { Component } from 'react';
import './App.css';
//add router//
import { Route, NavLink, Link } from 'react-router-dom';

//add components//
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='nav-bar'>
      <NavLink exact to='/'>LogIn</NavLink>
      <NavLink exact to='/signup'>SignUp</NavLink>
      </div>
      <Route exact path='/' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
      {/* //  <LogIn />
      //  <SignUp /> */}
       </div>
    );
  }
}

export default App;
