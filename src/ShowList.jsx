import React from "react";
import {ListGroup} from 'react-bootstrap';
import UserRow from "./UserRow";


class ShowList extends React.Component {
  render() {
    let { users } = this.props;
    
    return (
        <ListGroup variant="flush">
            {users.map(user => 
              <React.Fragment key={user.name} >
                <UserRow user={user} deleteUser={this.props.deleteUser} editUser={this.props.editUser} />
              </React.Fragment>
            )}
        </ListGroup>
    )
  }
}

export default ShowList;