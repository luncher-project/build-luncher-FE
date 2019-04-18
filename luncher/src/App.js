import React, { Component } from 'react';
import './App.css';
//add router//
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData} from './components/actions/index';
//add components//
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';
import AdminForm from './components/Admin form/AdminForm';
import Schools from './components/schools/Schools';
import Register from './components/register/Register';
import PrivateRoute from './components/login/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    }
  }

// componentDidMount() {
//   this.props.getData();
// }


  render() {
    return (
      <div className="App">
      <div className='nav-bar'>
      <NavLink exact to='/'>LogIn</NavLink>
      <NavLink exact to='/signup'>SignUp</NavLink>
      <NavLink exact to='/admin-form'>Admin Form</NavLink>
      <NavLink exact to='/protected'>Schools</NavLink>
     
      </div>
      <Route exact path='/' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
      {/* <Route exact path='/register' component={Register} /> */}
      {/* <PrivateRoute exact path='/protected' component={AdminForm} /> */}
  
      <PrivateRoute exact path='/protected' component={Schools} />
        {/* // render={ () => <Schools */}
        {/* // schools={this.state.schools} /> } 
        // /> */}
        <Route exact path='/admin-form' 
        render={ () => <AdminForm 
        addSchool={this.addSchool} /> }
         />
      <Route exact path='/signup/register' 
        render={ () => <Register 
        addUser={this.addUser} /> }
         />
      {/* <Route exact path='/register' component={Register} /> */}
       </div>
    );
  }
}



//setting up for redux 
const mapStateToProps = state => {
  // console.log(state);
  return {
    //  school: state.school,
    //  fetchingSchool: state.fetchingSchool,
     error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {})(App);



//need to protect admin page and add authentication for it 

