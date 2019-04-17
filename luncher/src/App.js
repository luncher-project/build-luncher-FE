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
import PrivateRoute from './components/login/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    }
  }

componentDidMount() {
  this.props.getData();
}


  render() {
    return (
      <div className="App">
      <div className='nav-bar'>
      <NavLink exact to='/'>LogIn</NavLink>
      <NavLink exact to='/signup'>SignUp</NavLink>
      <NavLink exact to='/login/admin-form'>Admin Form</NavLink>
      <NavLink exact to='/login/admin-form/schools'>Schools</NavLink>
      </div>
      <Route exact path='/' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
      {/* <PrivateRoute exact path='/protected' component={AdminForm} /> */}
  
      <Route exact path='/login/admin-form/schools' 
        render={ () => <Schools
        schools={this.state.schools} /> } 
        />
        <Route exact path='/login/admin-form' 
        render={ () => <AdminForm 
        addSchool={this.addSchool} /> }
         />
   
       </div>
    );
  }
}



//setting up for redux 
const mapStateToProps = state => {
  // console.log(state);
  return {
     data: state.data,
     fetchingData: state.fetchingData,
     error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {getData})(App);



//need to protect admin page and add authentication for it 

