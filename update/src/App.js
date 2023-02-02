import React from 'react';
import { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput/DemoOutput';
import MyDemo from './components/Demo/DemoOutput/MyDemo';
import './App.css';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App is running');

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParagraphHandler = useCallback(() => {
    // setShowParagraph(!showParagraph);
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={allowToggleHandler}>Allow Paragraph</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;