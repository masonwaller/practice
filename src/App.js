import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"


function App(props) {
  return (
    <div className="App">
      <Map
        google={props.google}
        zoom={9}
        center={{
          lat: "50",
          lng: "50"
        }}>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(App);
