import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersApp from './UsersApp';
import EditUser from './EditUser';

class App extends Component { 

    render() {
    
      return (    
        <Router>
          <Route exact path="/" component={UsersApp} />    
          <Route path={`/edit-user`} component={EditUser}  />      
        </Router>
      );  
    }
}

export default App;