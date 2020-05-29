import React from 'react';
import './App.css';
import Button from './button.js'


export default function Pad(props) {
  return (
    <div className='pad'>
      <div><Button num={1}/>
      <Button num={4}/>
      <Button num={7}/></div><div>
      <Button num={2}/>
      <Button num={5}/>
      <Button num={8}/></div><div>
      <Button num={3}/>
      <Button num={6}/>
      <Button num={9}/></div>
    </div>
  );
}