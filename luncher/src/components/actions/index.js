import axios from 'axios';
import axiosWithAuth from '../utils/axiosAuth';

//Actions//
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_SMURF_SUCCESS';
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


//login post request 
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('', creds)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload})
    })
    .catch(error => 
        dispatch({ type: LOGIN_FAILURE, payload: error.response})
    )
}


//get request 
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    axiosWithAuth.get('')
    // console.log('')
    .then(response => 
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data})
        )
    .catch(error => 
        dispatch({ type: FETCH_DATA_FAILURE, payload: error}))
}



//post request 
export const addSchool = newSchool => dispatch => {
    dispatch({ type: CREATE_DATA});
    axios.post('', newSchool)
    // console.log('')
    .then(response => 
        dispatch({ type: CREATE_DATA_SUCCESS, payload: response.data})
        )
    .catch(error => 
        ({ type: CREATE_DATA_FAILURE, payload: error}) )
}



//delete request





//edit/update request 