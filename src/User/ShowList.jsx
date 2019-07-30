import React from "react";
import {ListGroup} from 'react-bootstrap';
import UserRow from "./UserRow";


class ShowList extends React.Component {
  render() {
    let { users, deleteUser, editUser } = this.props;
    
    return (
        <ListGroup variant="flush">
            {users.map(user => 
              <React.Fragment key={user.id} >
                <UserRow user={user} deleteUser={deleteUser} editUser={editUser} />
              </React.Fragment>
            )}
        </ListGroup>
    )
  }
}

export default ShowList;