import './App.css';
import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UsersApp from './User/UsersApp';
import UserAppContainer from './User/UserAppContainer';
import Error404 from './Components/Error404';
import Preload from './Components/Preload';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component { 
    state = {
      users: [],      
      isLoading: false,
      error: null,
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

    render() {
      let { users, error, isLoading } = this.state;
      
      return (  
        <Container>
          <Preload isLoading={isLoading} error={error}>    
            <Router>
              <Switch>     
                <Route exact path="/"  component={() => <UsersApp users={users} isLoading={isLoading} error={error} />} /> 
                <UserAppContainer users={users}/>
                <Route component={Error404} />
              </Switch>        
            </Router>
          </Preload>   
        </Container> 
      );  
    }
}

export default App;