import React, { Component } from 'react';
import GoogleMap from 'react-maps-google';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap apiKey="[insert_api_key_here]" />
      </div>
    );
  }
}

export default App;
