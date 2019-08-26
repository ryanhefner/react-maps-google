import React, { Component } from 'react';
import GoogleMap, { Circle } from 'react-maps-google';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap apiKey="[insert_api_key_here]">
          <Circle center={{lat: 40.730610, lng: -73.935242}} radius={250} />
          <Circle center={{lat: 40.74, lng: -73.935242}} radius={250} />
          <Circle center={{lat: 40.75, lng: -73.935242}} radius={250} />
        </GoogleMap>
      </div>
    );
  }
}

export default App;
