import React from "react";
import {Row, Col} from 'react-bootstrap';

class Error404 extends React.Component {

  render() {
    return (
        <Row>
          <Col> 
            <h1>404! Такой страницы нет!</h1>
          </Col>    
        </Row>
      );
    }
}

export default Error404;