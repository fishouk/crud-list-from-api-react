import './App.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchUsers from './actions/fetchUsers';
import {getUsersError, getUsers, getUsersPending} from './reducers/users';

import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UsersApp from './User/UsersApp';
import UserAppContainer from './User/UserAppContainer';
import Error404 from './Components/Error404';
import Preload from './Components/Preload';

class App extends Component { 
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        const {fetchUsers} = this.props;
        const {isLoding} = this.props;
        console.log('11111111111111111111111111111111111111111111');
        console.log(this.props);
        console.log('11111111111111111111111111111111111111111111');
        //fetchUsers();
    }

    // shouldComponentRender() {
    //     const {isLoding} = this.props;
    //     if(this.isLoding === false) return false;
    //     // more tests
    //     return true;
    // }

    render() {
      let { users, error, isLoading } = this.props;
      console.log('22222222222222222222222222222222222');
      console.log(this.props);
      console.log('222222222222222222222222222222222222');
      return (  true
        // <Container>
        //   <Preload isLoading={isLoading} error={error}>    
        //     <Router>
        //       <Switch>     
        //         <Route exact path="/"  component={() => <UsersApp users={users} isLoading={isLoading} error={error} />} /> 
        //         <Route
        //           path="/edit-user/:id"
        //           render={props => (
        //               <UserAppContainer users={users} userId={parseInt(props.match.params.id, 10)} {...props}
        //               />
        //           )}
        //         />
        //         <Route component={Error404} />
        //       </Switch>        
        //     </Router>
        //   </Preload>   
        // </Container> 
      );  
    }
}

const mapStateToProps = state => ({
  error: getUsersError(state),
  users: getUsers(state),
  isLoading: getUsersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers: fetchUsers
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);