import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const School = props => {
    return(
        <div className='container'>
        <Card className='school-info'>
            <CardHeader>{props.schoolName}</CardHeader>
            <CardContent><strong>State:</strong> {props.state}</CardContent>
            <CardContent><strong>Zip:</strong> {props.zip}</CardContent>
            <CardContent><strong>Funds Needed:</strong> {props.fundsNeeded}</CardContent>
            <CardContent><strong>Contact:</strong> {props.contact}</CardContent>
            <Button variant='outlined'>Ready to Donate?</Button>
        </Card>
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