import React from "react";
import {Row, Col, ListGroup, Form, Button} from 'react-bootstrap';

class ShowList extends React.Component {
  render() {
    return (
        <Row>
            <Col>
            {this.props.error ? <p>{this.props.error.message}</p> : null}
            {!this.props.isLoading ? (
            <ListGroup variant="flush">
                {this.props.data.map(hit => {
                    if(!hit.showEditForm) { 
                    return(                                                 
                        <ListGroup.Item key={hit.name}>
                        {hit.name}
                        <Button variant="danger" size="sm" className="float-right" onClick={()=>this.props.deleteListItem(hit)}>Удалить</Button>
                        <Button variant="warning" size="sm" className="float-right" onClick={()=>this.props.showEdit(hit)}>Редактировать</Button>
                        </ListGroup.Item>                                             
                    );
                    } else {
                    return(                                                 
                        <ListGroup.Item key={hit.name}>     
                        <Row>
                            <Col sm={10}>                      
                                <Form.Control type="text" value={this.props.editedItemText} onChange={this.props.handleEditItem} placeholder={hit.name} required/>
                            </Col>
                            <Col sm={1}>   
                                <Button variant="success" size="sm" className="float-right" onClick={()=>this.props.editItem(hit)}>Сохранить</Button>
                            </Col>
                            <Col sm={1}>  
                                <Button variant="warning" size="sm" className="float-right" onClick={()=>this.props.hideEdit(hit)}>Назад</Button>
                            </Col>
                        </Row>
                        </ListGroup.Item>                                             
                    );
                    }
                })
                }
            </ListGroup>
            ) : (
            <p>Loading ...</p>)}
            </Col>
        </Row>
    );
  }
}

export default ShowList;