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
    let { user, deleteUser, editUser} = this.props;

    if(!showEditForm) {
        return <EditDeleteUser user={user} toggleShowEditStatus={this.toggleShowEditStatus} deleteUser={deleteUser} />        
    } else {
        return <EditFormUser user={user} toggleShowEditStatus={this.toggleShowEditStatus} editUser={editUser} />
    }

  }
}

export default UserRow;