import React from "react";
import EditDeleteUser from './EditDeleteUser';
import EditFormUser from './EditFormUser';

class UserRow extends React.Component {
    state = {
        showEditForm: false,
    }

    toggleShowEditStatus = () => {
        let { showEditForm } = this.state;
        this.setState({
            showEditForm: !showEditForm,
        });
    }

  render() {
    let { showEditForm } = this.state;
    let { user } = this.props;

    return (
        <React.Fragment>
            {!showEditForm ? (  
                <EditDeleteUser user={user} toggleShowEditStatus={this.toggleShowEditStatus} deleteUser={this.props.deleteUser} />        
            ) : (
                <EditFormUser user={user} toggleShowEditStatus={this.toggleShowEditStatus} editUser={this.props.editUser} />
            )}
        </React.Fragment>
    );
  }
}

export default UserRow;