import React from 'react'

export default function X(props) {
    
    return (
      <div>

            <label>
                X-value start:
            <input type="text" value={props.x[0]} onChange={(e) => props.setXs(e)} />
            </label>

      </div>
    );
  }