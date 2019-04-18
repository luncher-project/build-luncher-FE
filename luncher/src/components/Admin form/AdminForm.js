import React, { Component } from 'react';
// redux//
import { addSchool, updateSchool, deleteSchool, getAdmin} from '../actions';

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
  //functional setState
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
//function that adds a friend //
//bring in the post function, we'll call it addSchool //
onSubmit = event => {
    event.preventDefault();
    this.props.addSchool(this.state.school);
    // this.props.history.push('/');

this.setState({
    school: {
        schoolName: '',
        state: '',
        zip: '',
        fundsNeeded:'',
        // adminName: '',
        // address: '',
        // city: '',
        // email: '',
        // password: '',
        // confirmPassword: '', 
    }
})
};

//update  school function
editSchool = event => {
    event.preventDefault();
    this.props.updateSchool(this.state.school);
}

//delete school function
deletingSchool = event => {
    event.preventDefault();
    this.props.deleteSchool(this.state.school);
}



render() {
    return(
        <div className='form'>
            <div>
            <p>Let's get you added to the Luncher list of schools. Once you're signed up,
             donors can select your school and start donating to your lunch fund.</p>
            </div>
            <form onSubmit={this.onSubmit}> 
            <input 
            onChange={this.onChange}
            name='schoolName'
            value={this.state.school.schoolName}
            placeholder='School Name'
            />
            <input 
            onChange={this.onChange}
            name='state'
            value={this.state.school.state}
            placeholder='State'
            />
            <input 
            onChange={this.onChange}
            name='zip'
            value={this.state.school.zip}
            placeholder='Zip'
            />
            <input 
            onChange={this.onChange}
            name='fundsNeeded'
            value={this.state.school.fundsNeeded}
            placeholder='Funds Needed'
            />
            <button>Add School</button>
            <button onClick={this.deletingSchool}>Delete School</button>
            <button onClick={this.editSchool}>Edit School</button>
            </form>
        </div>
    );
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
  {addSchool, updateSchool, deleteSchool})(AdminForm);


