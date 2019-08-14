import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './index';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch(apiUrl)
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Something went wrong');
            }
          }
        )
        .then(res => {            
            dispatch(fetchUsersSuccess(res));
            return res;
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchUsersError(error));
        })
    }
}

export default fetchUsers;