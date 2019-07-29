import React from "react";
import {Row, Col} from 'react-bootstrap';
import Error404 from './Error404';

class EditUser extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <Row>
        <Col>
          { user ? <h3>Пользователь {user.name}</h3> : <Error404 /> }
        </Col>    
      </Row>
    );
   
  }
}

export default EditUser;