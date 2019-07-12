import './App.css';
import {Row, Col, Container} from 'react-bootstrap';
import React, {Component} from 'react';
import ListSearch from './ListSearch';
import AddNewItem from './AddNewItem';
import ShowList from './ShowList';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component { 

    state = {
      searchString: "",
      data: [],      
      isLoading: false,
      error: null,
      showAddForm: false,
      newItemText: { name: ''},
      editedItemText: '',
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
        .then(data => this.setState({ data: data, isLoading: false }))
        .then(() => this.state.data.forEach((el) => { el.showEditForm = false; }))
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    formListOfNamesSearch = event => {      
      this.setState({        
        searchString: event.target.value.trim().toLowerCase()
      });
    }

    updateAddInputStatus = (arg) => {      
      this.setState({        
        showAddForm: arg
      });
    }

    handleAddNewItem = event => {
      this.setState({        
        newItemText: {
          name: event.target.value
        }
      });
    }

    addNewItem = event => {
      if (this.state.newItemText) {
        this.setState({        
          data: this.state.data.concat(this.state.newItemText),
          showAddForm: false,
          newItemText: {
            name: ''
          }
        });
      } 
      event.preventDefault();
    }

    deleteListItem = item => {   
      this.setState(prevState => ({
        data: this.state.data.filter(el => el !== item )
      }));
    }

    updateShowEditStatus = (item, arg) => {
      const i = this.state.data.findIndex(x => x === item);      
      const newItems =  [...this.state.data];
      newItems[i].showEditForm = arg;
      this.setState({data: newItems});
    }

    showEdit = (item) => {this.updateShowEditStatus(item, true)}
    hideEdit = (item) => {this.updateShowEditStatus(item, false)}

    handleEditItem = event => { 
      this.setState({  
        editedItemText: event.target.value
      });
    }
    editItem = (item) => {
      let i = this.state.data.findIndex(x => x === item);
      const newItems =  [...this.state.data];
      newItems[i].name = this.state.editedItemText;
      this.setState({data: newItems});
      this.updateShowEditStatus(item, false);
    }

    render() {
      const { isLoading, error, showAddForm, editedItemText, searchString} = this.state;
      let { data } = this.state;
      const { newItemText } = this.state.newItemText.name;

      if (searchString.length > 0) {
          data = data.filter(data => {
          return data.name.toLowerCase().match(searchString);
        });
      }      

      console.log(data);

      return (    
          <Container>
            <Row>
              <Col>
                <h1>Get list of names by api with react app</h1>
              </Col>
            </Row>
            <ListSearch formListOfNamesSearch={this.formListOfNamesSearch} />
            <AddNewItem showAddForm={showAddForm} 
                        updateAddInputStatus={this.updateAddInputStatus} 
                        addNewItem={this.addNewItem}
                        newItemText={newItemText}
                        handleAddNewItem={this.handleAddNewItem}
                        updateAddInputStatus={this.updateAddInputStatus} />
            <ShowList error={error}
                      isLoading={isLoading}
                      data={data}
                      deleteListItem={this.deleteListItem}
                      showEdit={this.showEdit}
                      editedItemText={this.editedItemText}
                      handleEditItem={this.handleEditItem}
                      editItem={this.editItem}
                      hideEdit={this.hideEdit} />
          </Container>
      );  
    }
}

export default App;