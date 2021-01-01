import React, {useState} from 'react';
import './room.css';

function Sun() {
  return (
    <>    
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40"
      stroke="green" stroke-width="4" fill="yellow" />
      Sorry, your browser does not support inline SVG.
    </svg>
    <h3>The sun is shining!</h3>
    </>
  );
}

function Moon() {
  return (
    <>    
    <svg width="100" height="100">
      <circle cx="40" cy="40" r="30"
      stroke="grey" stroke-width="4" fill="whitesmoke" />
      Sorry, your browser does not support inline SVG.
    </svg>
    <h3>You are in Dark Mode!</h3>
    </>
  );
}

function Room() {
  let [isLit, setLit] = useState(true);
  let [temp, setTemp] = useState(22);
  return(    
    <div className={`room ${isLit? "lit" : "dark"}`}>
      <br />
      <h3>{isLit? Sun() : Moon()}</h3>      
      <br />
      <button onClick={() => setLit(true)} style={{marginRight: 10 + 'px'}}>Day</button>
      <button onClick={() => setLit(false)} style={{marginLeft: 10 + 'px'}}>Night</button>
      <br />
      <br />
      <br />
      <br />
      <h3 style={{display: 'inline'}}>Temperature : </h3><h1 style={{display: 'inline', fontSize: 60 + 'px'}}>{temp}</h1><h3 style={{display: 'inline'}}>C</h3>
      <br />
      <button onClick={() => setTemp(++temp)} style={{marginRight: 10 + 'px'}}>Increase</button>
      <button onClick={() => setTemp(--temp)} style={{marginLeft: 10 + 'px'}}>Decrease</button>
    </div>
  );
}

export default Room;