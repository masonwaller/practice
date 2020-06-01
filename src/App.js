import React from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'

export default function App(props) {
  const [values, setValues] = [0]
  return (
    <div className="App">
      <Pad/>
      <Graph values={values}/>
    </div>
  );
}


