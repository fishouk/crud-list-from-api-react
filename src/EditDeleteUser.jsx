import React from "react";
import {ListGroup, Button} from 'react-bootstrap';

class EditDeleteUser extends React.Component {
  
  render() {
    let { user } = this.props;
    return (                                                                  
        <ListGroup.Item>
            {user.name}
            <Button variant="danger" size="sm" className="float-right" onClick={()=>{this.props.deleteUser(user)}}>Удалить</Button>
            <Button variant="warning" size="sm" className="float-right" onClick={()=>{this.props.toggleShowEditStatus()}}>Редактировать</Button>
        </ListGroup.Item>             
    );
  }
}

export default EditDeleteUser;