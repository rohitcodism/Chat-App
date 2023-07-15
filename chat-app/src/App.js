import React, { useEffect, useState } from 'react';
import './App.css';
import { getDatabase } from "firebase/database";
import {  ref, push, set, onChildAdded } from "firebase/database";

function App() {

  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setmsg] = useState('');



  const database = getDatabase();
  const chatListRef = ref(database, 'chat');

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      console.log(data.val());
    });
  })



  const sendChat = ()=>{
    const newChatRef = push(chatListRef);
    set(newChatRef, {
      name, message: msg
    });

    // const c = [...chats];
    // c.push();
    // setChats(c);
    setmsg('');
  }

  return (
    <div className='chat-contain'>
      { name ? null : <div className='owner'>
        <input type="text" placeholder='Enter your name' onBlur={e => setName(e.target.value)} />
      </div>}
      { name ? <div>
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
      </div> : null}
    </div>
  );
}

export default App;
