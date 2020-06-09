import React, {useState} from 'react';
import './App.css';
import Pad from './pad.js'
import Graph from './graph.js'
import Line from './line.js'
import X from './x.js'

export default function App(props) {
  const [x, setX] = useState([0,1,2])
  const [values, setValues] = useState([0])
  const [sent, setSent] = useState('')

  const setXs = (e) => {
    let v = e.target.value
    if(parseInt(v)){
      v = parseInt(v)
      setX([v, v+1, v+2])
    } else if (v === '') {
      setX('')
    }
  }
  const changeGraph = (e) => {
    let val = e.target.value
    if(val === 'c'){
      setSent('')
      setValues([0])
    } else {
      let con = `${sent+val}`
      setSent(con)
        if(con.includes('/')){
          division(con)
        } else if (con.includes('*')){
          multiply(con)
        } else if (con.includes('+')){
          add(con)
        } else if (con.includes('-')){
          sub(con)
        } else {
          setValues([parseFloat(con)])
        }
      }
  }
  const division = (con) => {
    let arr = con.split('/')
    if(arr[1] === ''){
      setValues([parseFloat(arr[0])])
    } else if(arr.includes('x')){
      if(arr[0]==='x'){
        setValues([x[0]/arr[1],x[1]/arr[1],x[2]/arr[1]])
      } else {
        setValues([arr[0]/x[0],arr[0]/x[1],arr[0]/x[2]])
      }
    } else {
      setValues([parseFloat(arr[0]/arr[1])])
    }
  }
  const multiply = (con) => {
    let arr = con.split('*')
    if(arr[1] === ''){
      setValues([parseFloat(arr[0])])
    } else if(arr.includes('x')){
      if(arr[0]==='x'){
        setValues([x[0]*arr[1],x[1]*arr[1],x[2]*arr[1]])
      } else {
        setValues([arr[0]*x[0],arr[0]*x[1],arr[0]*x[2]])
      }
    } else {
      setValues([parseFloat(arr[0]*arr[1])])
    }
  }
  const add = (con) => {
    let arr = con.split('+')
    if(arr[1] === ''){
      setValues([parseFloat(arr[0])])
    } else if(arr.includes('x')){
      if(arr[0]==='x'){
        setValues([x[0]+arr[1],x[1]+arr[1],x[2]+arr[1]])
      } else {
        setValues([arr[0]+x[0],arr[0]+x[1],arr[0]+x[2]])
      }
    } else {
      setValues([parseFloat(arr[0]+arr[1])])
    }
  }
  const sub = (con) => {
    let arr = con.split('-')
    if(arr[1] === ''){
      setValues([parseFloat(arr[0])])
    } else if(arr.includes('x')){
      if(arr[0]==='x'){
        setValues([x[0]-arr[1],x[1]-arr[1],x[2]-arr[1]])
      } else {
        setValues([arr[0]-x[0],arr[0]-x[1],arr[0]-x[2]])
      }
    } else {
      setValues([parseFloat(arr[0]-arr[1])])
    }
  }
  return (
    <div className="App">
      <Pad changeGraph={changeGraph}/>
      <Line val={sent}/>
      <Graph values={values} x={x}/>
      <X setXs={setXs} x={x}/>
    </div>
  );
}


