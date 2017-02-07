import React, { Component } from 'react';
import './App.css';
import Kappa from './kappa.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Kappa Generator</h2>
        </div>
          <Kappa></Kappa>
        </div>
    );
  }
}

export default App;
