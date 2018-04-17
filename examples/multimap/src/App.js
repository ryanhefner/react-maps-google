import React, { Component } from 'react';
import GoogleMap, { Marker } from 'react-maps-google';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MapInstance">
          <GoogleMap apiKey="[insert_api_key_here]">
            <Marker position={{lat: 40.730610, lng: -73.935242}} />
          </GoogleMap>
        </div>
        <div className="MapInstance">
          <GoogleMap apiKey="[insert_api_key_here]">
            <Marker position={{lat: 40.730610, lng: -73.935242}} />
            <Marker position={{lat: 40.74, lng: -73.935242}} />
            <Marker position={{lat: 40.75, lng: -73.935242}} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default App;
