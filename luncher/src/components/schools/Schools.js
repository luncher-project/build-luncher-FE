import React, { Component } from 'react';
import School from './School';


class Schools extends Component {
    render() {
        return(
            <div>
             <ul>
                {this.props.schools.map(school => {
                    return(
                        <School 
                        name={school.schoolName}
                        id={school.id}
                        state={school.state}
                        zip={school.zip}
                        fundsNeeded={school.fundsNeeded}
                        fundsReceived={school.fundsReceived}
                        adminID={school.adminID}

                        />
                    )
                })}
             </ul>
            </div>
        )
    }
}

export default Schools;