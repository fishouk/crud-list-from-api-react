import React from "react";
import {Row, Col, ListGroup, Form, Button} from 'react-bootstrap';

class EditFormUser extends React.Component {
    state = { 
        newUserName: '',
    };

    handleEditUserName = event => {         
        this.setState({  
            newUserName: event.target.value
        });
    }

    editUserAndHideForm(user) {
        const { newUserName } = this.state;

        this.props.editUser(user, newUserName);
        this.props.toggleShowEditStatus();
    }

  render() {
    let { newUserName } = this.state;
    const { user } = this.props;
    return (
        <ListGroup.Item>     
            <Row>
                <Col sm={10}>                      
                    <Form.Control type="text" defaultValue={user.name} onChange={this.handleEditUserName} placeholder={!newUserName ? "Введите имя" : newUserName} required/>
                </Col>
                <Col sm={1}>   
                    <Button variant="success" size="sm" className="float-right" onClick={()=>{this.editUserAndHideForm(user)}}>Сохранить</Button>
                </Col>
                <Col sm={1}>  
                    <Button variant="warning" size="sm" className="float-right" onClick={()=>{this.props.toggleShowEditStatus()}}>Назад</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
  }
}

export default EditFormUser;