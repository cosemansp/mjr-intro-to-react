import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  state = {
    showText: true,
  };

  toggleText = e => {
    console.log(e);
    const { showText } = this.state;
    this.setState({
      showText: !showText,
    });
  };

  render() {
    const { showText } = this.state;
    return (
      <div className="container">
        <h1>My first app - Toggle Text</h1>
        {showText && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        )}
        <button className="btn btn-default" onClick={this.toggleText}>
          Toggle Text
        </button>
      </div>
    );
  }
}

// hot export to enable hot reloading of react components
// export default App;
export default hot(module)(App);
