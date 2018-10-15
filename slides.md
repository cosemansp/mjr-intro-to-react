---
title: React Introduction
transition: 'fade'
verticalSeparator: "^\\*\\*\\*"
---

# React

## Introduction

<img src="./images/react.png" width="300px"/><br>

<small>
by Peter Cosemans<br>
Copyright (c) 2018 Euricom nv.
</small>

<!-- markdownlint-disable -->
<br>
<style type="text/css">
.reveal section img {
    background:none;
    border:none;
    box-shadow:none;
}
.reveal h1 {
    font-size: 3.0em;
}
.reveal h2 {
    font-size: 2.00em;
}
.reveal h3 {
    font-size: 1.00em;
}
.reveal p {
    font-size: 70%;
}
.reveal blockquote {
    font-size: 100%;
}
.reveal pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 800px;
    word-wrap: normal;
    font-size: 100%;
}
</style>

---

# Prepare yourself

> It's not your jquery anymore

<!-- prettier-ignore -->
***

## Learn JavaScript

> A large part of knowning React is knowing JavaScript. <br>
> React is using the latest ES features

### Make sure you know:

- ES Modules
- (Arrow) Functions & Classes
- Promises & async/await
- Spread operators, destructering
- This reference
- Linting with ESlint & VSCode

<br>

<!-- prettier-ignore -->
***

## Training

### JavaScript

- [Deep JavaScript Foundations V2](https://frontendmasters.com/courses/javascript-foundations/) @FrontEndMasters
- [ES6 for Everyone](es6.io) from @wesbos
- [Let’s Learn ES6](https://www.youtube.com/watch?v=LTbnmiXWs2k&list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX) at @YouTube

<br>

### Tooling

- [Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)

---

# You first react app

> It's easy

<!-- prettier-ignore -->
***

## Getting started

index.html

```html
<body>
  <!-- entry point of the app -->
  <div id="root"></div>
  <!-- bundle is create by parcel -->
  <script src="./main.jsx"></script>
</body>
```

Install dependencies

```bash
# Dependencies
yarn add react react-dom

# Dev-Dependecies
yarn add parcel-bundler --dev
yarn install babel-core babel-preset-react --dev
```

<!-- prettier-ignore -->
***

## babel

.babelrc

```json
{
  "presets": ["react"]
}
```

<!-- prettier-ignore -->
***

main.jsx

```jsx
// import the dependenciess
import React from 'react';
import ReactDOM from 'react-dom';

// create your App component
const App = () => <h1>My React App</h1>;

// render the app
ReactDOM.render(<App />, document.getElementById('root'));
```

<!-- prettier-ignore -->
***

## Build and startup

package.json

```json
"scripts": {
    "serve": "parcel serve src/index.html",
    "build": "parcel build src/index.html --no-minify",
}
```

commands

```bash
# run in development
yarn serve

# build (development)
yarn build
```

---

# JSX

> Writing HTML with JSX

<!-- prettier-ignore -->
***

## JSX

### It's Javascript ++

```jsx
// import the dependenciess
import React from 'react';
import ReactDOM from 'react-dom';

// create a template with JSX
const template = <h1>My First React App</h1>;

// get element '<div id="root"></div>'
const appRoot = document.getElementById('app');

// render (bootstrap) the app
ReactDom.render(template, appRoot);
```

<!-- prettier-ignore -->
***

## CreateElement

This

<!-- prettier-ignore -->
```jsx
const template = <h1>My Title</h1>;
ReactDom.render(template, document.getElementById('app'));
```

is translated into

<!-- prettier-ignore -->
```js
var template = React.createElement(
  'h1',
  null,
  'My First React App'
);
ReactDom.render(template, document.getElementById('app'));
```

See also [Babel REPL](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBFCmBbADgGwIYJgXhgCgCgYYAeACwEYA-I4mAWQE8YAxASwCdoYAledYLACCyZLRIB6SjQCUAbgJ8BUACIhEAOg7wwAE3gc8CFBgQAaGLpDAAroh1QNAc3hQAoqiQOAQowCSungA5OiiQTLyQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=)

<!-- prettier-ignore -->
***

## Simple component

```js
function App() {
    return <h1>Hello World of React<h1>
}

ReactDom.render(<App/>, document.getElementById('app'));
```

```js
// arrow function expression
const App = () => <h1>Hello World of React<h1>
```

<!-- prettier-ignore -->
***

## Simple component

```
// return jsx (with multi-line expression)
const App = () => {
    return (
        <h1>
            Hello World of React
        <h1>
    )
}
```

<!-- prettier-ignore -->
***

## One Root Element

```jsx
const App = () => <h1>My Title</h1><p>Welcome</p>;

// ERROR: Adjacent JSX elements must be
// wrapped in an enclosing tag
```

Valid JSX has only one root element

```js
const App = () => (
  <div>
    <h1>My Title</h1>
    <p>May the Force be with you</p>
  </div>
);
```

> Use Parentheses for readability

<!-- prettier-ignore -->
***

### Embedding Expressions

```jsx
const name = 'peter';
const customer = {
  name: 'euricom',
  location: 'mechelen',
};
function formatCustomer(customer) {
    return `${customer.name}: ${customer.location}`;
}
const App = () => {
    const url = 'https://placeimg.com/200/200/animals';
    return (
        <div>
            <p>{user}</p>
            <p>{customer.name}</p>
            <p>{user.toUpperCase()}</p>
            <p>{formatCustomer(customer)</p>
            <img src={url} />
        </div>
    );
}
```

Everything between `{ .... }` is JavaScript code.

<!-- prettier-ignore -->
***

### Not everything is rendered

Booleans, Null, and Undefined Are Ignored

```jsx
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

An object can't be rendered

```jsx
<p>customer</p>    { /* this throws an error */ }
```

<!-- prettier-ignore -->
***

## Conditional rendering

ternary operator

```jsx
const App = () => <p>User: {user.name ? user.name : '-'}</p>;
```

logical and operator

```jsx
const userAge = (
	{user.age && user.age >= 18 && <p>Age: user.age</p>}
)
```

<!-- prettier-ignore -->
***

## Conditional rendering

```js
renderName(name) {
    return <h1>{myName}</h1>
}

renderEmpty() {
    return <h1>No Name</h1>
}

const App = () => {
    if (this.myName) {
        return renderName(this.myName);
    }
    return renderEmpty();
}
```

need more?

[All the Conditional Renderings in React](https://www.robinwieruch.de/conditional-rendering-react/)

<!-- prettier-ignore -->
***

## Arrays

Typical use

<!-- prettier-ignore -->
```jsx
const users = [
    { id: 1, name: 'john' }
    { id: 2, name: 'peter' }
    { id: 3, name: 'bob' }
]
const template = (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);
```

> The key attribute is required

<!-- prettier-ignore -->
***

## Differences In Attributes

```jsx
const App = () => (
  <button type="button" id="btn1" class="btn" tabindex="2">
    Click me
  </button>
);

// --> ERROR: INvalid DOM Property 'class'
```

JSX is still JavaScript, can't use reserved keywords.

<!-- prettier-ignore -->
```jsx
const App = () => (
  <button type="button" className="btn" tabIndex="2">
    Click me
  </button>
);
```

See [React Supported DOM Elements](https://reactjs.org/docs/dom-elements.html)

---

## Exercise 1

JSX - Render User Table

- Start with exercise/myApp
- Import users from users.js
- Show users in table

<img src="./images/MyApp - User Table.png" width="500px">

---

# Components

> The building blocks of React

<!-- prettier-ignore -->
***

## Functional Component

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

```jsx
// welcome.jsx
const Welcome = () => {
  return <h1>Welcome</h1>;
};
export default Welcome;
```

> Most component should be functional component

<!-- prettier-ignore -->
***

## Class Component

```
// Welcome.js
import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Place all components in separated files (capitalized)

<!-- prettier-ignore -->
***

## Component Nesting

You can use the component in any JSX expression

```jsx
import Welcome from './welcome';
const App = () => (
  <div>
    <h1>Title</h1>
    <Welcome />
  </div>
);
```

<!-- prettier-ignore -->
***

## Component State

Class Components can have state

```jsx
// app.js
import React, { Component } from 'react';

export default class App extends Component {
  state: {
    message: 'world',
  };
  render() {
    return <h1>Hello {this.state.message}</h1>;
  }
}
```

<!-- prettier-ignore -->
***

## SetState

Set state via setState function

```js
this.setState((state) => ({
  ...state
  counter: 1,
}));
```

```js
userService.getAll().then(users => {
  this.setState(() => ({
    users,
  }));
});
```

<!-- prettier-ignore -->
***

## Events

```jsx
class MyComponent extends React {
  onClick = evt => {
    console.log('clicked', evt);
  };
  render() {
    return (
      <div>
        <h1>Title</h1>
        <button onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}
```

---

## Exercise 2

Component State & Event

- Toggle visibility of paragraph with a button

<img src="./images/MyApp - Toggle text.png" width="500px">

---

# Debugging

> Get that app under control

<!-- prettier-ignore -->
***

## React Dev Tools

<img src="./images/devtools-full.gif">

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

---

# Live Cycle

> It's alive

<!-- prettier-ignore -->
***

## Live Cycle Methods

```jsx
export default class MyComponent extends Component {
  constructor(props) {
    console.log('construction', props);
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate(oldProps) {
    console.log('props changed', { oldProps, props: this.props });
  }
  componentWillUnmount() {
    console.log('bye-bye');
  }
  render() {
    return <p>Hello</p>;
  }
}
```

<!-- prettier-ignore -->
***

### Live Cycle

<img src="./images/react-lifecycke.jpg" width="800px">

[React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---

# Http Requests

> Get the data

<!-- prettier-ignore -->
***

## Http in React

> React doens't provide a Http library.

#### 3th party libraries

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (standardized)
- [Axios](https://github.com/axios/axios) (most popular)
- [SuperAgent](https://visionmedia.github.io/superagent/)
- [Request](https://github.com/request/request)

<!-- prettier-ignore -->
***

## Axios

```js
import axios from 'axios';

axios
  .get('https://swapi.co/api/starships')
  .then(res => {
    // success
    console.log('result', res.data);
  })
  .catch(error => {
    if (error.response) {
      // The request was made and status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request
      console.log('Error', error.message);
    }
  });
```

<!-- prettier-ignore -->
***

## Axios in React

```jsx
import axios from 'axios';

export default class MyComponent extends Component {
  state = {
    contact: {},
  };
  async componentDidMount() {
    const res = await axios.get(`contacts/${id}`);
    setState(() => {
      contact: res.data,
    });
  }
  render() {
    const { contact } = this.state;
    return (
      <div>
        <h1>Contact</h1>
        <Contact contact={contact} />;
      </div>
    );
  }
}
```

---

## Exercise 3

Loading data

- Refactor user list by loading users.json with axios
- Add delete action (to remove user)

<img src="./images/MyApp - Loading Data.png" width="500px">

---

# Props

> The in and outs of the components

<!-- prettier-ignore -->
***

## Props

With props we can pass data from parent to client component

```jsx
class App extends Component {
  render() {
    return <Greeting firstName="peter" lastName="jansens" />;
  }
}
```

<!-- prettier-ignore -->
***

## Props

Accessing props in class component

```jsx
class Greeting extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h3>{this.props.title}<h3>
  }
}
```

Accessing props in functional component

```jsx
const Greeting = (props) => {
  <h3>
    {props.title}
  <h3>
}
```

<!-- prettier-ignore -->
***

## Props

Prefer to destructor your props

```jsx
class Greeting extends Component {
  render() {
    const { title } = this.props;
    return <h3>{title}<h3>
  }
}
```

```jsx
const Greeting = ({title}) => {
  <h3>
    {title}
  <h3>
}
```

<!-- prettier-ignore -->
***

### Props as events to parent

```jsx
class App extends React {
  render() {
    return (
      MyComponent onUpdate={handleUpdate} />
    )
  }
}
```

```jsx
const MyComponent = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.onUpdate} />
      <button onClick={() => props.onUpdate('hello')} />
    </div>
  );
};
```

<!-- prettier-ignore -->
***

## Children prop

<!-- prettier-ignore -->
```jsx
const FancyButton = (props) => {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```

```jsx
<FancyButton>
  <strong>Click Me</strong>
</FancyButton>
```

---

## Exercise 4

Component - Props

- Refactor in user container & user component
- Move the table rendering in its own component

<img src="./images/MyApp - Component.png" width="500px">

---

# Resources

> Get the extra information

<!-- prettier-ignore -->
***

## Resources

Training

- [REACT FOR BEGINNERS](https://reactforbeginners.com/)
  from @wesbos
- [The Beginner’s Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react) from @kentcdodds
- [React.js cheatsheet](https://devhints.io/react)

<!-- prettier-ignore -->
***

## Resources

#### Libraries

- [React Helmet](https://github.com/nfl/react-helmet) - A document head manager
- [React Toastify](https://github.com/fkhadra/react-toastify) - Notification for your app
- [Enzyme](https://github.com/airbnb/enzyme/) - JavaScript Testing utilities
  for React
- [React virtualized](https://bvaughn.github.io/react-virtualized) - Data Grid
- [Recat-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap 3 components
- [Grommet](http://grommet.io/) - Design system for React
- [MATERIAL-UI](https://material-ui.com/) - Google's Material Design in React

---

# Ready to build you React Apps
