import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'
import Line from './line.js'

export default function App(props) {
  const [values, setValues] = useState([0])
  const [sent, setSent] = useState('')
  const [x, setX] = useState([0,1,2])

  const changeGraph = (e) => {
    let val = e.target.value
    if(val === 'c'){
      console.log('c')
      setSent('')
      setValues([0])
    }
    setSent(`${sent+val}`)
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


