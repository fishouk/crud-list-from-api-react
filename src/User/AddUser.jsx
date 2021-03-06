import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

class AddUser extends React.Component {
  state = {
    showAddForm: false,
    newItem: { name: ''},
  }

  addNewItem = event => {
    let { newItem } = this.state;     
    const { users, addNewItem } = this.props;
    if (users.length > 0) {
      const lastUser = users[users.length - 1];
      const idForNewUser = lastUser.id + 1;
      newItem.id = idForNewUser;       
    }    
    addNewItem(newItem);
    event.preventDefault();
    this.setState({        
      newItem: {    
        name: ''
      },
      showAddForm: false,
    });      
  };

  handleChangeTextOfNewItem = event => {
    this.setState({        
      newItem: {
        id: 1,
        name: event.target.value
      }      
    });
  }

  toggleAddInputStatus = () => { 
    let { showAddForm } = this.state;     
    this.setState({        
      showAddForm: !showAddForm
    });
  }  

  render() {
    const { showAddForm, newItem } = this.state;
    const { newItemName } = newItem.name;

    return (
      <Row>
        <Col>
        { !showAddForm ? (<Button variant="success" onClick={()=>{this.toggleAddInputStatus()}}>Добавить новый</Button>) : (
            <Form onSubmit={this.addNewItem}>
              <Row>
                  <Col sm={8}>
                    <Form.Control type="text" value={newItemName} onChange={this.handleChangeTextOfNewItem} placeholder="Введите данные" required/> 
                  </Col>
                  <Col sm={2}>
                    <Button variant="success" type="submit">Сохранить</Button> 
                  </Col>
                  <Col sm={2}>
                    <Button variant="danger" onClick={()=>{this.toggleAddInputStatus()}}>Назад</Button>
                  </Col>
              </Row>
            </Form>
          )}
          </Col>
      </Row>
    );
  }
}
  
export default AddUser;