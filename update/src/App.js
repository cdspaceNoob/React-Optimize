import React from 'react';
import { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App is running');

  const toggleParagraphHandler = () => {
    // setShowParagraph(!showParagraph);
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
