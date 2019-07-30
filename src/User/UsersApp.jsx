import {Row, Col} from 'react-bootstrap';
import React, {Component} from 'react';
import ListSearch from './ListSearch';
import AddUser from './AddUser';
import ShowList from './ShowList';
import Preload from '../Components/Preload';

class UsersApp extends Component { 

    state = {
      searchString: "",
      users: [],      
    };

    componentDidMount() {
      let {users} = this.props;
      this.setState({ users: users });
    }
  
    formListOfNamesSearch = event => {      
      this.setState({        
        searchString: event.target.value.trim().toLowerCase()
      });
    }

    addNewItem = (newUser) => { 
      let { users } = this.state;
      if (newUser) {
        this.setState({        
          users: users.concat(newUser),
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
      const { searchString} = this.state;
      const { isLoading, error} = this.props;
      let { users } = this.state;
      
      if (searchString.length > 0) {
        users = users.filter(users => {
          return users.name.toLowerCase().match(searchString);
        });
      }      

      console.log(users);

      return (    
          <React.Fragment>
            <Row>
              <Col>
                <h1>Get list of names by api with react app</h1>
              </Col>
            </Row>
            <ListSearch formListOfNamesSearch={this.formListOfNamesSearch} />
            <AddUser addNewItem={this.addNewItem} users={users} />
            <Row>
              <Col>                
                <Preload isLoading={isLoading} error={error}>  
                  <ShowList users={users} deleteUser={this.deleteUser} editUser={this.editUser} />
                </Preload> 
              </Col>
            </Row>
          </React.Fragment>
      );  
    }
}

export default UsersApp;