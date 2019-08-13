export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}

export function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

