import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
  } from '../actions/index'
import initialState from "../store/initialState";

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.users
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
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