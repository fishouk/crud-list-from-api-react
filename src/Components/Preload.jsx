import React from "react";
import { connect } from 'react-redux';
import {getUsersError, getUsersPending} from '../reducers/index';

class Preload extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    const { error, isLoading, children } = this.props;

    if (error) {
      return (<p>{error.message}</p>);
    }
    if (isLoading) {
      return (<p>Loading ...</p>);
    }
    return children;
  }
}

const mapStateToProps = state => ({
  error: getUsersError(state),
  isLoading: getUsersPending(state)
})

export default connect(mapStateToProps)(Preload);