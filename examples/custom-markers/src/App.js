import React, { Component } from 'react';
import GoogleMap, { Marker } from 'react-maps-google';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap apiKey="[insert_api_key_here]">
          <Marker
            options={{
              icon: {
                anchor: {
                  x: 13,
                  y: 32
                },
                url: '/marker.svg',
              },
            }}
            position={{lat: 40.730610, lng: -73.935242}}
          />
          <Marker
            options={{
              icon: {
                anchor: {
                  x: 13,
                  y: 32
                },
                url: '/marker.svg',
              },
            }}
            position={{lat: 40.74, lng: -73.935242}}
          />
          <Marker
            options={{
              icon: {
                anchor: {
                  x: 13,
                  y: 32
                },
                url: '/marker.svg',
              },
            }}
            position={{lat: 40.75, lng: -73.935242}}
          />
        </GoogleMap>
      </div>
    );
  }
}

export default App;
