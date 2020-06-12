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
        } else if (con.includes('^')){
          squared(con)
        } else if (con.includes('√')) {
          sqrt(con)
        } else {
          setValues([parseFloat(con)])
        }
      }
  }
  const squared = (con) => {
    let arr = con.split('^')
    if(arr[1] === ''){
      setValues([parseFloat(arr[0])])
    } else if(arr.includes('x')){
      if(arr[0]==='x'){
        let a = loop(x[0], parseInt(arr[1]))
        let b = loop(x[1], parseInt(arr[1]))
        let c = loop(x[2], parseInt(arr[1]))
        setValues([a,b,c])
      } else {
        let a = loop(parseInt(arr[0]), x[0])
        let b = loop(parseInt(arr[0]), x[1])
        let c = loop(parseInt(arr[0]), x[2])
        setValues([a,b,c])
      }
    } else {
      let a = parseInt(arr[0])
      let b = parseInt(arr[1])
      let result;
      if(b === 0){ result = 1} 
      else if(b === 1){ result = a} else {
      for(let i=2; i<=b; i++){
        if(result){result=result*a}
        else{result=a*a}
      }}
      setValues([result])
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
  const sqrt = (con) => {
    let arr = con.split('√')
    if(arr.includes('x')){
      setValues([Math.sqrt(x[0]),Math.sqrt(x[1]),Math.sqrt(x[2])])
    } else {
      if(arr[0] !== '') {
        let m = Math.sqrt(arr[0])
        setValues([m])
      } else {
        let m = Math.sqrt(arr[1])
        setValues([m])
      }
    }
  }
  const loop = (ex, exp) => {
    let result;
    if(exp === 0){return 1}
    else if(exp === 1){return ex} else {
    for(let i=2; i<=exp; i++){
      if(result){result=result*ex}
      else{result=ex*ex}
    }}
    return result
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


