import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import users from './users';

class App extends Component {
  render() {
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
