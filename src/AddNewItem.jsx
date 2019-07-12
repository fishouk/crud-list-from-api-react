import React from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

class AddNewItem extends React.Component {
    render() {
      return (
        <Row>
            <Col>
            { !this.props.showAddForm ? (<Button variant="success" onClick={()=>this.props.updateAddInputStatus(true)}>Добавить новый</Button>) : (
                <Form onSubmit={this.props.addNewItem}>
                <Row>
                    <Col sm={8}>
                    <Form.Control type="text" value={this.props.newItemText} onChange={this.props.handleAddNewItem} placeholder="Введите данные" required/> 
                    </Col>
                    <Col sm={2}>
                    <Button variant="success" type="submit">Сохранить</Button> 
                    </Col>
                    <Col sm={2}>
                    <Button variant="danger" onClick={()=>this.props.updateAddInputStatus(false)}>Назад</Button>
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