import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDisplayText = () => {
    setDisplayText(inputText);
    setInputText('');
  };

  return (
    <div className="App">
      <h1>Forma</h1>
      <input
        type="text"
        placeholder="Unesi tekst"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleDisplayText}>Potvrdi</button>
      {displayText && (
        <div>
          <h2>Uneseni tekst:</h2>
          <p>{displayText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
