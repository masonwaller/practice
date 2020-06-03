import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'
import Line from './line.js'

export default function App(props) {
  const [values, setValues] = useState([0])
  const [sent, setSent] = useState('')

  const changeGraph = (e) => {
    let val = e.target.value
    setSent(`${val}`)
    setValues([val])
    
  }
  return (
    <div className="App">
      <Pad changeGraph={changeGraph}/>
      <Line val={sent}/>
      <Graph values={values}/>
    </div>
  );
}


