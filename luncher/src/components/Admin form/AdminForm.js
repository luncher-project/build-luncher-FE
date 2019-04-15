import React, { Component } from 'react';

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
              name: '',
              adminName: '',
              address: '',
              city: '',
              state: '',
              zip: '',
              email: '',
              password: '',
              comfirmPassword: '',
              funds:''
            }
        }
    }


  //for form input   
onChange = event => {
    console.log('school handler is working');
    event.persist();


    let value = event.target.value;

    this.setState(prevState => ({
        school: {
            ...prevState.school,
            [event.target.name]: value
        }
    }))
}


//submit form 
//bring in the post function//
onSubmit = event => {
    event.preventDefault();
    this.props.addSchool(this.state.school)

this.setState({
    school: {
        name: '',
        adminName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        password: '',
        comfirmPassword: '',
        funds:''
    }
})
};

render() {
    return(
        <div>
            <div>
            <p>Let's get you added to the Luncher list of schools. Once you're signed up,
             donors can select your school and start donating to your lunch fund.</p>
            </div>
            <form> 
            <input 
            onChange={this.onChange}
            name='name'
            value={this.state.school.name}
            placeholder='name'
            />
            <input 
            onChange={this.onChange}
            name='adminName'
            value={this.state.school.adminName}
            placeholder='adminName'
            />
             <input 
            onChange={this.onChange}
            name='address'
            value={this.state.school.address}
            placeholder='address'
            />
             <input 
            onChange={this.onChange}
            name='city'
            value={this.state.school.city}
            placeholder='city'
            />
            <input 
            onChange={this.onChange}
            name='state'
            value={this.state.school.state}
            placeholder='state'
            />
            <input 
            onChange={this.onChange}
            name='zip'
            value={this.state.school.zip}
            placeholder='zip'
            />
            <input 
            onChange={this.onChange}
            name='email'
            value={this.state.school.email}
            placeholder='email'
            />
            <input 
            onChange={this.onChange}
            name='password'
            value={this.state.school.password}
            placeholder='password'
            />
            <input 
            onChange={this.onChange}
            name='password'
            value={this.state.school.confirmPassword}
            placeholder='password'
            />
             <input 
            onChange={this.onChange}
            name='funds'
            value={this.state.school.funds}
            placeholder='funds'
            />
            <button>SIGN UP</button>
            </form>
        </div>
    )
}
}

export default AdminForm;