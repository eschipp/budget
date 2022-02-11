import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'home'
    }
  }

onRouteChange = (route) => {
  this.setState({route: route});
}

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
