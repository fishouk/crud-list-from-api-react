import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
  } from '../actions/index'

const initialState = {
    isLoading: false,
    users: [],
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            console.log('44444444444444444444444');
            console.log(action.payload)
            console.log('44444444444444444444444');
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUsers = state => state.users;
export const getUsersPending = state => state.isLoading;
export const getUsersError = state => state.error;

export default usersReducer;
// import { combineReducers } from 'redux';
// import users from './users';

// const rootReducer = combineReducers({
//     users
// })

// export default rootReducer


