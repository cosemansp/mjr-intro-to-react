import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/UserList';

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

  deleteUser = userId => {
    const { users } = this.state;
    this.setState({
      users: users.filter(user => user.id !== userId),
    });
    // this.setState(state => {
    //   return { users: state.users.filter(user => user.id !== userId) };
    // });
  };
  render() {
    return <UserList users={this.state.users} onDelete={userId => this.deleteUser(userId)} />;
  }
}

export default App;
