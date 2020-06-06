import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'
import Line from './line.js'

export default function App(props) {
  const [x, setX] = useState([0,1,2])
  const [values, setValues] = useState([0])
  const [sent, setSent] = useState('')

  const changeGraph = (e) => {
    let val = e.target.value
    if(val === 'c'){
      setSent('')
      setValues([0])
    } else {
      let con = `${sent+val}`
      setSent(con)
      if(con.includes('x')){
        console.log('yes')
      } else {
        if(con.includes('/')){
          division(con)
        } else if (con.includes('*')){
          multiply(con)
        } else if (con.includes('+')){
          add(con)
        } else if (con.includes('-')){
          sub(con)
        }
      }
    }
  }
  const division = (con) => {
    let arr = con.split('/')
    if(arr[1] === ''){
      setValues([parseInt(arr[0])])
    } else {
      setValues([parseInt(arr[0]/arr[1])])
    }
  }
  const multiply = (con) => {
    let arr = con.split('*')
    if(arr[1] === ''){
      setValues([parseInt(arr[0])])
    } else {
      setValues([parseInt(arr[0]*arr[1])])
    }
  }
  const add = (con) => {
    let arr = con.split('+')
    if(arr[1] === ''){
      setValues([parseInt(arr[0])])
    } else {
      setValues([parseInt(arr[0]+arr[1])])
    }
  }
  const sub = (con) => {
    let arr = con.split('-')
    if(arr[1] === ''){
      setValues([parseInt(arr[0])])
    } else {
      setValues([parseInt(arr[0]-arr[1])])
    }
  }
  return (
    <div className="App">
      <Pad changeGraph={changeGraph}/>
      <Line val={sent}/>
      <Graph values={values}/>
    </div>
  );
}


