import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const res = await axios.get('./users.json');
    this.setState({
      users: res.data,
    });
  }

  deleteUser = selectedUser => {
    console.log(selectedUser);
    const { users } = this.state;
    this.setState({ users: users.filter(user => user.id !== selectedUser.id) });
    // this.setState(state => {
    //   return { users: state.users.filter(user => user.id !== userId) };
    // });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h1>My first app</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address && user.address.street}</td>
                <td>
                  <a onClick={() => this.deleteUser(user)}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// hot export to enable hot reloading of react components
// export default App;
export default hot(module)(App);
