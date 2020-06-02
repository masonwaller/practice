import React from 'react';
import './App.css';
import Button from './button.js'


export default function Pad(props) {
  return (
    <div className='pad'>
      <div><Button num={1}/>
      <Button num={4} changeGraph={props.changeGraph}/>
      <Button num={7} changeGraph={props.changeGraph}/></div><div>
      <Button num={2} changeGraph={props.changeGraph}/>
      <Button num={5} changeGraph={props.changeGraph}/>
      <Button num={8} changeGraph={props.changeGraph}/></div><div>
      <Button num={3} changeGraph={props.changeGraph}/>
      <Button num={6} changeGraph={props.changeGraph}/>
      <Button num={9} changeGraph={props.changeGraph}/></div><div>
      <Button num={'x'} changeGraph={props.changeSym}/>
      <Button num={'*'} changeGraph={props.changeSym}/>
      <Button num={'/'} changeGraph={props.changeSym}/></div><div>
      <Button num={'+'} changeGraph={props.changeSym}/>
      <Button num={'-'} changeGraph={props.changeSym}/>
      </div>
    </div>
  );
}