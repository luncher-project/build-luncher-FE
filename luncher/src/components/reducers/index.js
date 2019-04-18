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
    EDIT_DATA_FAILURE,

    FETCH_ADMIN,
    FETCH_ADMIN_SUCCESS,
    FETCH_ADMIN_FAILURE} from '../actions';

    const initialState = {
        data: [],
        loggingIn: false,
        fetchingData: false,
        creatingData: false,
        deletingData: false,
        editingData: false,
        fetchingAdmin: false,
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
                    data: action.payload
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
            case EDIT_DATA: 
            return {
                ...state,
                editingData: true,
            };
            case EDIT_DATA_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                editingData: true,
                fetchingData: false
            };
            case EDIT_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                editingData: false
            };
            case DELETE_DATA: 
            return {
                ...state,
                deletingData: true,
            };
            case DELETE_DATA_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                deletingData: true,
                fetchingData: false
            };
            case DELETE_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingData: false
            };
            case FETCH_ADMIN: 
            return {
                ...state,
                fetchingAdmin: true,
            };
            case FETCH_ADMIN_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                fetchingAdmin: true,
                fetchingData: false
            };
            case FETCH_ADMIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingAdmin: false
            }
                default:
                    return state;
            }
        }
    
        export default reducer;