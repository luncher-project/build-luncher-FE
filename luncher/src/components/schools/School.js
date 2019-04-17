import React from 'react';


const School = props => {
    return(
        <div className='school-info'>
            <h2>{props.schoolName}</h2>
            <p>{props.id}</p>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            <p>{props.fundsNeeded}</p>
            <p>{props.fundsReceived}</p>
            <p>{props.adminID}</p>
        </div>
    )
}

export default School;