import React from "react";
import {ListGroup, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserControls extends React.Component {
  
  render() {
    let { deleteUser, user } = this.props;
    return (                                                                  
        <ListGroup.Item>
            {user.name}
            <Button variant="danger" size="sm" className="float-right" onClick={()=>{deleteUser(user)}}>Удалить</Button>     
            <Link  className="text-warning float-right" to={`/edit-user/${user.id}`}>Редактировать</Link> 
        </ListGroup.Item>             
    );
  }
}

export default UserControls;