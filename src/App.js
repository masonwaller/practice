import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'

export default function App(props) {
  const [values, setValues] = useState([0])

  const changeGraph = (e) => {
    const input = {input: e.target.value}
    console.log(input)
    setValues([parseFloat(input.input)])
    console.log(values)
  }
  return (
    <div className="App">
      <Pad changeGraph={changeGraph}/>
      <Graph values={values}/>
    </div>
  );
}


