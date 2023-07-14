import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('')

  return (
    <div className='chat-contain'>
      <h1>User: {name}</h1>
      <div className='chat-container'>
        <div className="container me">
          <p className='chat-box me'>
            <strong> name: </strong>
            <span>chat message</span>
          </p>
        </div>
        <div className="container ">
          <p className='chat-box '>
            <strong> name: </strong>
            <span>chat message</span>
          </p>
        </div>
      </div>
      <div className="message-box">
        <input type="text" placeholder='Type your message' />
        <button className='send'>Send</button>
      </div>
    </div>
  );
}

export default App;
