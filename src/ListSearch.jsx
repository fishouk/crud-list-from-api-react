import React from "react";
import {Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';

class ListSearch extends React.Component {
  render() {
    return (
        <Row>
            <Col>
            <Form>
                <Form.Group>
                <Form.Label>Поиск</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl                        
                    placeholder="Начните печатать"
                    onChange={this.props.formListOfNamesSearch}
                    />
                </InputGroup>
                </Form.Group>
            </Form>
            </Col>
        </Row>
    );
  }
}

export default ListSearch;