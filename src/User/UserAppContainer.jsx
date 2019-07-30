import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import EditUser from './EditUser';

class UserAppContainer extends Component { 
    
    render() {
      let { users } = this.props;
      
      return (          
        <Route
            path="/edit-user/:id"
            render={props => (
                <EditUser
                user={
                    users.find(
                    user =>
                        user.id === parseInt(props.match.params.id, 10)
                    )
                }
                {...props}
                />
            )}
            />
      );  
    }
}

export default UserAppContainer;