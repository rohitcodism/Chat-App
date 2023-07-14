import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('')

  return (
    <div>
      <h1>User: {name}</h1>
      <div className='chat-container'>
        <div className="container me">
          <p className='chat-box'>
            <strong> name: </strong>
            <span>chat message</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
