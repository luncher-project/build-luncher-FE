import React from 'react';

//for redux
//connect function import//

//import for actions//

//import for styling?/


class LogIn extends React.Component {
    state = {
        credentials: {
            username: '',
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

login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials) 
};



render() {
    return(
        <div>
            <h2>Sign In- Luncher Account</h2>
         <form>
        <input className='user-field'
            type='text'
            placeholder='Username'
            name='username'
            onChange={this.handlerChanges}
            value={this.state.credentials.username}
            />
        <input className='pwd-field'
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

export default LogIn;