import React from 'react';

import userService from '../../services/UserService';

class EditUser extends React.Component {

  state = {
    name: '',
    age: 0,
  };

  async onSubmit(event) {
    event.preventDefault();

    try {
      const response = await userService.saveUser({ name: this.state.name, age: this.state.age });
      console.log(response);
      this.props.onAddUser();
      this.setState({ name: '', age: 0 });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={e => this.setState({ name: e.target.value })} required />
          <input type="number" value={this.state.age} placeholder="Age" onChange={e => this.setState({ age: e.target.value })} required />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default EditUser;
