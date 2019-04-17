import React from 'react';


const School = props => {
    return(
        <div className='school-info'>
            <h2>{props.schoolName}</h2>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            <p>{props.fundsNeeded}</p>
            <p>{props.contact}</p>
        </div>
    );
}


School.defaultProps = {
    schoolName: '',
    state: '',
    zip: '',
    fundsNeeded: '',
    contact: ''
  };



export default School;