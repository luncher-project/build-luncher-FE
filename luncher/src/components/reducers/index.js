//import action types from actions//
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,

    CREATE_DATA,
    CREATE_DATA_SUCCESS,
    CREATE_DATA_FAILURE,

    DELETE_DATA,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE,

    EDIT_DATA,
    EDIT_DATA_SUCCESS,
    EDIT_DATA_FAILURE } from '../actions';

    const initialState = {
        data: [],
        loggingIn: false,
        fetchingData: false,
        creatingData: false,
        deletingData: false,
        editingData: false,
        error: '',
        token: localStorage.getItem('token')
    }


    export const reducer = (state = initialState, action) => {
        console.log('reducer', action.payload);
        switch (action.type) {
            case LOGIN_START: 
                return {
                    ...state,
                    loggingIn: true
                };
            case LOGIN_SUCCESS:
            // console.log('success action');
                return {
                    ...state,
                    loggingIn: false,
                    token: action.payload
                };
            case LOGIN_FAILURE: 
                return {
                    ...state,
                    error: '',
                    loggingIn: false
                };
            case FETCH_DATA:
                return {
                    ...state,
                    fetchingData: true,
                }
            case FETCH_DATA_SUCCESS:
                return{
                    ...state,
                    fetchingData: false,
                    data: [...state.data, ...action.payload]
                };
            case FETCH_DATA_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    fetchingData: false
                };
            case CREATE_DATA: 
            return {
                ...state,
                creatingData: true,
                fetchingData: false
            };
            case CREATE_DATA_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                creatingData: true,
                fetchingData: false
            };
            case CREATE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingData: false
            };
                default:
                    return state;
            }
        }
    
        export default reducer;