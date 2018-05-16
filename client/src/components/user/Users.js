import React from 'react';

import userService from '../../services/UserService';
import EditUser from './EditUser';

class Users extends React.Component {

  state = {
    users: [],
    loading: true,
  };

  componentWillMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const users = await userService.getUsers();
      this.setState({ users, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <p></p>
        {
          this.state.loading ?
            <p>Carregando...</p> :
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.users.map((x, index) => {
                    return (
                      <tr key={index}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.age}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
        }
      </div>
    );
  }
}

export default Users;
