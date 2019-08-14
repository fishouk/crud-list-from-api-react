import React, {Component} from 'react';
import EditUser from './EditUser';

class UserAppContainer extends Component { 
    
    render() {
      let { users, userId } = this.props;

      const user = users.find( user => user.id === userId );
      
      return <EditUser user={user}/>
    }
}

export default UserAppContainer;