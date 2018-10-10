import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './style.css';

const App = () => (
  <div className="App">
    <img className="App-Logo" src={logo} alt="React Logo" width="100px" />
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
