import React from "react";
import Error404 from '../Components/Error404';

class CheckEditUserByID extends React.Component {

  render() {
    const { user, children } = this.props;

    if(!user) {
      return <Error404 />;
    } else {
      return  children;
    }   
  }
}

export default CheckEditUserByID;