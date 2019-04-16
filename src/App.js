import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Users />
      </div>
    );
  }
}

export default App;
