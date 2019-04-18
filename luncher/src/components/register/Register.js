import React from 'react';
// import book from '../'

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
        <div className='register'>
        <div>
            <p className='register-paragraph'>Let's get you added to the Luncher list of schools. Once you're signed up,
             donors can select your school and start donating to your lunch fund.</p>
            </div>
            {/* <img className='register-img'
            src={book}
            alt={'Apple on top of books'} /> */}
        <form onSubmit={this.registerUser} className='register-form'>
          {/* <h2>Register for a Luncher Account</h2>  */}
          <label for='name' className='first-name-label1'>First Name*</label>
        <input className='first-name-field'
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={this.handlerChanges}
            value={this.state.credentials.firstName}
            />
            <label for='name' className='last-name-label2'>Last Name*</label>
             <input className='last-name-field'
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={this.handlerChanges}
            value={this.state.credentials.lastName}
            />
            <label for='email' className='email-label3'>Email Address*</label>
            <input className='email-field'
            type='text'
            placeholder='Email'
            name='email'
            onChange={this.handlerChanges}
            value={this.state.credentials.email}
            />
            <label for='password' className='password-label4'>Password*</label>
        <input className='password-field'
            type='password'
            placeholder='Password'
            name='password'
            onChange={this.handlerChanges}
            value={this.state.credentials.password}
            />
            <label for='role' className='role-label5'>Role*</label>
        <input className='role-field'
            type='text'
            placeholder='Role'
            name='role'
            onChange={this.handlerChanges}
            value={this.state.credentials.role}
            />
        <button className='register-btn'>SIGN UP</button>
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



