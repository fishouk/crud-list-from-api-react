import {Row, Col, Container, ListGroup, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import React, {Component} from 'react';
import './App.css';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component { 

    state = {
      searchString: "",
      data: [],      
      isLoading: false,
      error: null,
      showAddForm: false,
      newItemText: { name: ''},
      editedItemText: '',
    };

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(apiUrl)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data: data, isLoading: false }))
        .then(() => this.state.data.forEach((el) => { el.showEditForm = false; }))
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    formListOfNamesSearch = event => {      
      this.setState({        
        searchString: event.target.value.trim().toLowerCase()
      });
    }

    showAddInput = () => {      
      this.setState({        
        showAddForm: true
      });
    }

    hideAddInput = () => {      
      this.setState({        
        showAddForm: false
      });
    }

    handleAddNewItem = event => {
      this.setState({        
        newItemText: {
          name: event.target.value
        }
      });
    }

    addNewItem = event => {
      if (this.state.newItemText) {
        this.setState({        
          data: this.state.data.concat(this.state.newItemText),
          showAddForm: false,
          newItemText: {
            name: ''
          }
        });
      } 
      event.preventDefault();
    }

    deleteListItem = item => {   
      this.setState(prevState => ({
        data: this.state.data.filter(el => el !== item )
      }));
    }

    updateShowEditStatus = (item, arg) => {
      let i = this.state.data.findIndex(x => x === item);
      this.state.data[i].showEditForm = arg;
      this.forceUpdate()
    }

    showEdit = (item) => {this.updateShowEditStatus(item, true)}
    hideEdit = (item) => {this.updateShowEditStatus(item, false)}

    handleEditItem = event => { 
      this.setState({  
        editedItemText: event.target.value
      });
    }
    editItem = (item) => {
      let i = this.state.data.findIndex(x => x === item);
      this.state.data[i].name = this.state.editedItemText;
      this.state.data[i].showEditForm = false;
      this.forceUpdate()
    }

    render() {
      const { isLoading, error, showAddForm, editedItemText} = this.state;
      let { data, searchString} = this.state;
      let newItemText = this.state.newItemText.name;

      if (searchString.length > 0) {
          data = data.filter(function(data) {
          return data.name.toLowerCase().match(searchString);
        });
      }      

      console.log(data);

      return (    
          <Container>
            <Row>
              <Col>
                <h1>Get list of names by api with react app</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Поиск</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl                        
                        placeholder="Начните печатать"
                        onChange={this.formListOfNamesSearch}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                { !showAddForm ? (<Button variant="success" onClick={this.showAddInput}>Добавить новый</Button>) : (
                  <Form onSubmit={this.addNewItem}>
                    <Row>
                      <Col sm={8}>
                        <Form.Control type="text" value={newItemText} onChange={this.handleAddNewItem} placeholder="Введите данные" required/> 
                      </Col>
                      <Col sm={2}>
                        <Button variant="success" type="submit">Сохранить</Button> 
                      </Col>
                      <Col sm={2}>
                        <Button variant="danger" onClick={this.hideAddInput}>Назад</Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
                <ListGroup variant="flush">
                  {data.map(hit => {
                      if(!hit.showEditForm) { 
                        return(                                                 
                          <ListGroup.Item key={hit.name}>
                            {hit.name}
                            <Button variant="danger" size="sm" className="float-right" onClick={()=>{this.deleteListItem(hit)}}>Удалить</Button>
                            <Button variant="warning" size="sm" className="float-right" onClick={()=>{this.showEdit(hit)}}>Редактировать</Button>
                          </ListGroup.Item>                                             
                        );
                      } else {
                        return(                                                 
                          <ListGroup.Item key={hit.name}>     
                            <Row>
                              <Col sm={10}>                      
                                <Form.Control type="text" value={this.editedItemText} onChange={this.handleEditItem} placeholder={hit.name} required/>
                              </Col>
                              <Col sm={1}>   
                                <Button variant="success" size="sm" className="float-right" onClick={()=>{this.editItem(hit)}}>Сохранить</Button>
                              </Col>
                              <Col sm={1}>  
                                <Button variant="warning" size="sm" className="float-right" onClick={()=>{this.hideEdit(hit)}}>Назад</Button>
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
          </Container>
      );  
    }
}

export default App;