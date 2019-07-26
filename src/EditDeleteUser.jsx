import React from "react";
import {ListGroup, Button, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EditDeleteUser extends React.Component {
  
  render() {
    let { deleteUser, toggleShowEditStatus, user } = this.props;
    return (                                                                  
        <ListGroup.Item>
            {user.name}
            <Button variant="danger" size="sm" className="float-right" onClick={()=>{deleteUser(user)}}>Удалить</Button>     
            <Link  className="text-warning float-right" to={{
                pathname: `/edit-user/${user.id}`,
                state: {
                  user: user
                }
              }}>Редактировать</Link>    
            {/* <Button variant="warning" size="sm" className="float-right" onClick={()=>{toggleShowEditStatus()}}>Редактировать</Button> */}
            {/* //<Nav.Link href={`/edit-user/${user.id}`} className="text-warning float-right">Редактировать</Nav.Link>                        */}
        </ListGroup.Item>             
    );
  }
}

export default EditDeleteUser;