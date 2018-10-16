import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

const App = () => <h1>My React App</h1>;

// hot export to enable hot reloading of react components
// export default App;
export default hot(module)(App);
