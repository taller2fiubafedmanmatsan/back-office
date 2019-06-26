import React from 'react';
import MaterialTable from 'material-table';
// import Api from '../../../client/hypechat';

export default class UserList extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    this.setState(() => ({ 
      users: [
        ...this.props.users
      ]
     }));
  }

  async handleRowAdd(data) {
    this.setState((prevState) => ({users: [...prevState.users, data]}));
    this.props.addUser(data, this.props.channel, this.props.workspace);
  }

  async onRowDelete(users, userEmail) {
    this.setState(() => ({users: [...users]}));
    this.props.deleteUser(userEmail, this.props.channel, this.props.workspace);
  }
  
  render() {
    console.log(this.props.user);
    return (
      <div className="ws-user-list">
        <MaterialTable
          title="Users"
          columns={this.props.columns}
          data={this.state.users}
          editable={{
            onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.users];
                data.push(newData);
                this.handleRowAdd(newData);
              }, 600);
            }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.users];
                  data.splice(data.indexOf(oldData), 1);
                  console.log(data);
                  this.onRowDelete(data, oldData.email);
                }, 600);
              }),
          }}
        />
      </div>
    );
  }
}

UserList.defaultProps = {
  columns: [
    { title: 'Id', field: '_id'},
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' }
  ],
}



