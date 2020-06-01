import React from "react"
import './App.css';



export default function Button(props) {
  return (
    <div className='btndiv'>
      <button className="btn" value={props.num} onClick={(e) => props.changeGraph(e)}>{props.num}</button>
      
    </div>
  );
}