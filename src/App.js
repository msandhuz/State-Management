import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setMessage(text);
  };

  return (
    <div className="App">
      <h1>Is State Clear Now?</h1>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Click Me</button>
      {message && <h3 className="message">{message}</h3>}
    </div>
  );
}

export default App;
