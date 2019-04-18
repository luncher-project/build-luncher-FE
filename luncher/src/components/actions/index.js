
import axios from '../axios/axios';

//Actions//
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const CREATE_DATA = 'CREATE_DATA';
export const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';
export const CREATE_DATA_FAILURE = 'CREATE_DATA_FAILURE';

export const DELETE_DATA = 'DELETE_DATA';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const EDIT_DATA = 'EDIT_DATA';
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS';
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE';

export const FETCH_ADMIN = 'FETCH_ADMIN';
export const FETCH_ADMIN_SUCCESS = 'FETCH_ADMIN_SUCCESS';
export const FETCH_ADMIN_FAILURE = 'FETCH_ADMIN_FAILURE';


//login post request for authorized user
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
     axios()
    .post('https://luncher-backend.herokuapp.com/api/login', creds)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token})
    })
    .catch(error => 
        dispatch({ type: LOGIN_FAILURE, payload: error.response})
    )
}


//get request from admin to see school list
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    axios()
    .get('https://luncher-backend.herokuapp.com/api/schools')
    .then(response => 
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
        )
    .catch(error => 
        dispatch({ type: FETCH_DATA_FAILURE, payload: error}))
}




export const getAdmin = () => dispatch => {
    dispatch({ type: FETCH_ADMIN});
    axios()
    .get('https://luncher-backend.herokuapp.com/api/admin/school')
    .then(response => 
        dispatch({ type: FETCH_ADMIN_SUCCESS, payload: response.data})
        )
    .catch(error => 
        dispatch({ type: FETCH_ADMIN_FAILURE, payload: error}))
}


//post request to add school
export const addSchool = school => dispatch => {
    dispatch({ type: CREATE_DATA});
    axios().post('https://luncher-backend.herokuapp.com/api/admin/school', school)
    // console.log('')
    .then(response => 
        dispatch({ type: CREATE_DATA_SUCCESS, payload: response.data})
        )
    .catch(error => 
    dispatch({ type: CREATE_DATA_FAILURE, payload: error}) )
}



// //delete request
export const deleteSchool = () => dispatch => {
dispatch({ type: DELETE_DATA});
axios().delete('https://luncher-backend.herokuapp.com/api/admin/school')
.then(response => 
    dispatch({ type: DELETE_DATA_SUCCESS, payload: response.data})
    )
.catch(error => 
dispatch({ type: DELETE_DATA_FAILURE, payload: error}) )
}


// edit/update request 
export const updateSchool =  school => dispatch => {
    dispatch({ type: EDIT_DATA});
    axios().put('https://luncher-backend.herokuapp.com/api/admin/school', school)
    .then(response => 
        dispatch({ type: EDIT_DATA_SUCCESS, payload: response.data})
        )
    .catch(error => 
    dispatch({ type: EDIT_DATA_FAILURE, payload: error}) )
    }

