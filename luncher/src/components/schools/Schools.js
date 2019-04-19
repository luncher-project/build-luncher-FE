import React, { Component } from 'react';
import School from './School';
import { connect } from 'react-redux';
import { getData} from '../actions/index';
import './School.css';

class Schools extends Component {
    componentDidMount() {
        this.props.getData();
     }

 render() {
     return (
         <div>
             <h1 className='title'>Schools In Need of Funds</h1>
             <ul>
                 {this.props.schools.map(school => {
                    return (
                        <School
                        key={school.id}
                        schoolName={school.schoolName}
                        state={school.state}
                        zip={school.zip}
                        fundsNeeded={school.fundsNeeded}
                        contact={school.contact}
                        />
                    )
                 })}
             </ul>
         </div>
     )
 } 
}
    
// School.defaultProps = {
//     schools: ''
//   };

const mapStateToProps = state => {
    console.log(state);
    return {
      schools: state.data
    }
  }
  
  export default connect(
    mapStateToProps, 
    {getData})(Schools);
  



