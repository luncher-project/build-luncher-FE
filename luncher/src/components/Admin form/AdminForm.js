import React, { Component } from 'react';
// redux//
import { addSchool } from '../actions';
import { connect } from 'react-redux';



class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
              schoolName: '',
              state: '',
              zip: '',
              fundsNeeded:''
            //   adminName: '',
            //   address: '',
            //   city: '',
            //   email: '',
            //   password: '',
            //   comfirmPassword: '',
            
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
//bring in the post function, we'll call it addSchool //
onSubmit = event => {
    event.preventDefault();
    this.props.addSchool(this.state.school)

this.setState({
    school: {
        SchoolName: '',
        state: '',
        zip: '',
        fundsNeeded:''
        // adminName: '',
        // address: '',
        // city: '',
        // email: '',
        // password: '',
        // comfirmPassword: '',
        
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
            <form onSubmit={this.onSubmit}> 
            <input 
            onChange={this.onChange}
            name='schoolName'
            value={this.state.school.schoolName}
            placeholder='school name'
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
            name='fundsNeeded'
            value={this.state.school.fundsNeeded}
            placeholder='funds needed'
            />
            {/* <input 
            onChange={this.onChange}
            name='adminName'
            value={this.state.school.adminName}
            placeholder='adminName'
            /> */}
             {/* <input 
            onChange={this.onChange}
            name='address'
            value={this.state.school.address}
            placeholder='address'
            /> */}
             {/* <input 
            onChange={this.onChange}
            name='city'
            value={this.state.school.city}
            placeholder='city'
            /> */}
         
            {/* <input 
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
            /> */}
            <button>SIGN UP</button>
            </form>
        </div>
    )
}
}

// setting up for redux 
const mapStateToProps = state => {
  console.log(state);
  return {
     creatingData: state.creatingData,
     error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {addSchool})(AdminForm);


