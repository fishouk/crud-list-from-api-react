import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

class AddUser extends React.Component {
  state = {
    showAddForm: false,
    newItem: { name: ''},
  }

  addNewItem = event => {
    let { newItem } = this.state; 
    this.props.addNewItem(newItem);
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
        name: event.target.value
      }      
    });
  }
  toggleAddInputStatus = (ag) => { 
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