import React, { useEffect, useState } from 'react';
import './App.css';
import { getDatabase } from "firebase/database";
import {  ref, push, set, onChildAdded } from "firebase/database";

function App() {

  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');

  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
        setChats(chats => [...chats, data.val()]);
      });
  }, [])

  const sendChat = ()=>{

    
    const chatRef = push(chatListRef);
    set(chatRef, {
      name, message: msg
    });
    setMsg('');
  }

  return (
    <div className='chat-contain'>
      { name ? null : <div className='owner'>
        <input type="text" placeholder='Enter your name' onBlur={e => setName(e.target.value)} />
      </div>}
      { name ? <div>
        <h3>User: {name}</h3>
        <div className='chat-container'>
          {chats.map((c , i) => (<div key={i} className={` container ${c.name === name ? 'me' : ''}`}>
              <p className={`chat-box ${c.name === name ? 'me' : ''}`}>
                <strong> {c.name} </strong>
                <span>{ c.message }</span>
                <span>{i}</span>
              </p>
            </div> 
          ))}
      </div>
      <div className="message-box">
        <input type="text" placeholder='Type your message' onInput={ e => setMsg(e.target.value)} value={msg} />
        <button className='send' onClick={e => sendChat()}>Send</button>
      </div>
      </div> : null }
    </div>
  );
}

export default App;