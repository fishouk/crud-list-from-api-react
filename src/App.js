import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import React, {Component} from 'react';
import ListSearch from './ListSearch';
import AddUser from './AddUser';
import ShowList from './ShowList';
import Preload from './Preload';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component { 

    state = {
      searchString: "",
      users: [],      
      isLoading: false,
      error: null,      
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
        .then(users => this.setState({ users: users, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    formListOfNamesSearch = event => {      
      this.setState({        
        searchString: event.target.value.trim().toLowerCase()
      });
    }

    addNewItem = (newName) => { 
      let { users } = this.state;
      if (newName) {
        this.setState({        
          users: users.concat(newName),
        });
      } 
    }  

    deleteUser = user => {   
      let { users } = this.state;
      this.setState(prevState => ({
        users: users.filter(el => el !== user )
      }));
    }
    
    editUser = (user, newName) => {
      let { users } = this.state;
      let i = users.findIndex(x => x === user);
      const newUsers =  [...users];
      newUsers[i].name = newName;
      this.setState({users: newUsers});
    }

    render() {
      const { isLoading, error, editedItemText, searchString} = this.state;
      let { users } = this.state;
      
      if (searchString.length > 0) {
        users = users.filter(users => {
          return users.name.toLowerCase().match(searchString);
        });
      }      

      console.log(users);

      return (    
          <Container>
            <Row>
              <Col>
                <h1>Get list of names by api with react app</h1>
              </Col>
            </Row>
            <ListSearch formListOfNamesSearch={this.formListOfNamesSearch} />
            <AddUser addNewItem={this.addNewItem} />
            <Row>
              <Col>                
                <Preload isLoading={isLoading} error={error}>
                  <ShowList users={users} deleteUser={this.deleteUser} editUser={this.editUser} />
                </Preload>
              </Col>
            </Row>
          </Container>
      );  
    }
}

export default App;