import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './index';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch(fetchUsersSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    }
}

export default fetchUsers;