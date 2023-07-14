import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('')

  return (
    <div>
      <h1>User: {name}</h1>
      <div className='chat-container'>
        <p>
          <strong> name: </strong>
          <span>chat message</span>
        </p>
      </div>
    </div>
  );
}

export default App;
