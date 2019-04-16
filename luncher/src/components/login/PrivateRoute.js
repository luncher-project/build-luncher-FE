import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


//whatever gets called in component is where it takes in in route 
const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
        {...rest}
        render={props => {
           if (localStorage.getItem('token')) {
                return <Component {...props} />;
            } else {
                //redirect to login
               return <Redirect to='/login' />;
                }
            }}
        />
    );

    const mapStateToProps = state => {
        console.log(state);
        return {
           error: state.error
        }
      }

      export default connect(
        mapStateToProps,
        {}
      )(PrivateRoute);
    