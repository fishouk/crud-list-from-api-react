import React from "react";
import {Row, Col} from 'react-bootstrap';
import CheckEditUserByID from "./CheckEditUserByID";

class EditUser extends React.Component {

  render() {
    const { user } = this.props;
    return (      
      <CheckEditUserByID user={user}>
        { user ? (
          <Row>
            <Col>
              <h3>Пользователь {user.name}</h3>
            </Col>    
          </Row>
        ) : (
          null
      )}
      </CheckEditUserByID>
    );
   
  }
}

export default EditUser;