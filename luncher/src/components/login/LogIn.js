import React from 'react';

//for redux
//connect function import////import for actions//
import { connect } from 'react-redux';
import { login } from '../actions';

//import for styling?/
import './LogIn.css'


class LogIn extends React.Component {
    state = {
        credentials: {
            email: '',
            password: ''
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

login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
    // .then(() => this.props.history.push('/protected'));
        //fires if login is successful
};



render() {
    return(
        <div>
        <h2>Sign In- Luncher Account</h2> 
        <form onSubmit={this.login}>
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
        type='radio'
        id='School Administrator'
        name='user'
        value='School Administrator'
        />
         <input 
        type='radio'
        id='Donor'
        name='user'
        value='Donor'
        />
        <button>SIGN IN</button>
         </form>
         <div>
            <p>Don't have an account? Sign up?</p>
         </div>
        </div>
    )
}
}

 //sign up needs to link to login...maybe turn into a link//


const mapStateToProps = state => {
    console.log(state);
  return {
    error: state.error,
    loggingIn: state.loggingIn
  }
}

export default connect(
    mapStateToProps,
    { login }
  )(LogIn);



