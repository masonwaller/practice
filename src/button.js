import React from "react"
import './App.css';



export default function Button(props) {
  return (
    <div className='btndiv'>
      <button className="btn">{props.num}</button>
      
    </div>
  );
}