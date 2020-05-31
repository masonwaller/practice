import React from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'

export default function App(props) {
  return (
    <div className="App">
      <Pad/>
      <Graph />
    </div>
  );
}


