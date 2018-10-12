import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>My first app</h1>
        Add here a table (or list) of users
      </div>
    );
  }
}

// hot export to enable hot reloading of react components
// export default App;
export default hot(module)(App);
