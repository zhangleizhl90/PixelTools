import React, { Component } from 'react';
import PixelCanvas from './widgets/PixelCanvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PixelCanvas/>
      </div>
    );
  }
}

export default App;
