import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('user2');
  const [chats, setChats] = useState([{name: 'user1', message: 'message1'}, { name: 'user2', message: 'message2' }])

  return (
    <div className='chat-contain'>
      <h3>User: {name}</h3>
      <div className='chat-container'>
          {chats.map(c => <div className={` container  ${c.name === name ? 'me' : ''}`}>
              <p className={`chat-box  ${c.name === name ? 'me' : ''}`}>
                <strong> {c.name} </strong>
                <span>{ c.message }</span>
              </p>
            </div> 
          )}
      </div>
      <div className="message-box">
        <input type="text" placeholder='Type your message' />
        <button className='send'>Send</button>
      </div>
    </div>
  );
}

export default App;
