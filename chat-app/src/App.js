import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [chats, setChats] = useState([{name: 'user1', message: 'message1'}, { name: 'user2', message: 'message2' }]);
  const [msg, setmsg] = useState('');
  const sendChat = ()=>{
    const c = [...chats];
    c.push({name, message: msg});
    setChats(c);
    setmsg('');
  }

  return (
    <div className='chat-contain'>
      { name ? null : <div className='owner'>
        <input type="text" placeholder='Enter your name' onBlur={e => {const title = e.target.value}} />
        <button onClick={() => setName()}>Chat</button>
      </div>}
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
        <input type="text" placeholder='Type your message' onInput={ e => setmsg(e.target.value)} value={msg} />
        <button className='send' onClick={e => sendChat()}>Send</button>
      </div>
    </div>
  );
}

export default App;
