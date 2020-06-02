import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'

export default function App(props) {
  const [values, setValues] = useState([0])

  const changeGraph = (e) => {
    const input = {input: e.target.value}
    setValues([parseFloat(input.input)])
  }
  return (
    <div className="App">
      <Pad changeGraph={changeGraph}/>
      <Graph values={values}/>
    </div>
  );
}


