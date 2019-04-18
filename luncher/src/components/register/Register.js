import React from 'react';

//for redux
//connect function import////import for actions//
import { connect } from 'react-redux';
import { addUser } from '../actions';

//import for styling?/
import './Register.css'


class Register extends React.Component {
    state = {
        credentials: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            role: ''
        }
    };

//function for input//
handlerChanges= event => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }
    });
}

//login fn will go here 
//login will be name of action creator/axios request we'll call login//

registerUser = event => {
    event.preventDefault();
    this.props.addUser(this.state.credentials);
    //  this.props.history.push('/login/admin-form/schools');
        //fires if login is successful
};



render() {
    return(
        <div>
        <h2>Register for a Luncher Account</h2> 
        <form onSubmit={this.registerUser}>
        <input 
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={this.handlerChanges}
            value={this.state.credentials.firstName}
            />
             <input 
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={this.handlerChanges}
            value={this.state.credentials.lastName}
            />
            <input 
            type='text'
            placeholder='Email'
            name='email'
            onChange={this.handlerChanges}
            value={this.state.credentials.email}
            />
        <input 
            type='password'
            placeholder='Password'
            name='password'
            onChange={this.handlerChanges}
            value={this.state.credentials.password}
            />
        <input 
            type='text'
            placeholder='Role'
            name='role'
            onChange={this.handlerChanges}
            value={this.state.credentials.role}
            />
        <button>SIGN UP</button>
         </form>
        </div>
    )
}
}

 //sign up needs to link to login...maybe turn into a link//


const mapStateToProps = state => {
    console.log(state);
  return {
    error: state.error,
    loggingIn: state.loggingIn,
    registerUser: state.registerUser
  }
}

export default connect(
    mapStateToProps,
    { addUser }
  )(Register);



