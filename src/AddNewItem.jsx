import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

class AddNewItem extends React.Component {
  state = {
    showAddForm: false,
    newItemText: { name: ''},
  }

  addNewItem = event => {
    let { showAddForm, newItemText } = this.state; 
    this.props.addNewItem(newItemText);
    event.preventDefault();
    newItemText.name = '';
    showAddForm = false;    
  };

  handleChangeTextOfNewItem = event => {
    this.setState({        
      newItemText: {
        name: event.target.value
      }      
    });
  }
  updateAddInputStatus = (arg) => {      
    this.setState({        
      showAddForm: arg
    });
  }  

  render() {
    const { showAddForm, newItemText } = this.state;
    const { newItemTextName } = newItemText.name;

    return (
      <Row>
        <Col>
        { !showAddForm ? (<Button variant="success" onClick={()=>{this.updateAddInputStatus(true)}}>Добавить новый</Button>) : (
            <Form onSubmit={this.addNewItem}>
              <Row>
                  <Col sm={8}>
                    <Form.Control type="text" value={newItemTextName} onChange={this.handleChangeTextOfNewItem} placeholder="Введите данные" required/> 
                  </Col>
                  <Col sm={2}>
                    <Button variant="success" type="submit">Сохранить</Button> 
                  </Col>
                  <Col sm={2}>
                    <Button variant="danger" onClick={()=>{this.updateAddInputStatus(false)}}>Назад</Button>
                  </Col>
              </Row>
            </Form>
          )}
          </Col>
      </Row>
    );
  }
}
  
export default AddNewItem;