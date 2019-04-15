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
        error: ''
    }


    export const reducer = (state = initialState, action) => {
        console.log('reducer', action);
        switch (action.type) {
            case LOGIN_START: 
                return {
                    ...state,
                    error: '',
                    loggingIn: true
                };
                case LOGIN_SUCCESS:
                    return {
                        ...state,
                        error: '',
                        loggingIn: false
                    }
                default:
                    return state;
            }
        }
    
        export default reducer;