import React, { Component } from 'react';
import School from './School';
import { connect } from 'react-redux';



class Schools extends Component {
 render() {
     return (
         <div>
             <h1>School List</h1>
             <ul>
                 {this.props.schools.map(school => {
                    return (
                        <School
                        key={school.id}
                        name={school.schoolName}
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
    {})(Schools);
  



