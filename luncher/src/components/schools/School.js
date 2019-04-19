import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import * as Icon from 'react-feather';


const School = props => {
    return(
        <div className='container'>
        <div className='school-info'>
        <Card>
            {/* <Icon.Mail className='icons' /> */}
            <h2>{props.schoolName}</h2>
            <CardContent><strong>State:</strong> {props.state}</CardContent>
            <CardContent><strong>Zip:</strong> {props.zip}</CardContent>
            <CardContent><strong>Funds Needed:</strong> {props.fundsNeeded}</CardContent>
            <CardContent><strong>Contact:</strong> {props.contact}</CardContent>
            <Button variant='outlined'>Ready to Donate?</Button>
        </Card>  
        </div>
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