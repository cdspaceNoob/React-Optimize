import React from 'react';
import { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput/DemoOutput';
import './App.css';
import MyDemo from './components/Demo/DemoOutput/MyDemo';

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App is running');

  const demoPropsHandler = () => {
    console.log('demo props handler running');
  };

  const toggleParagraphHandler = () => {
    // setShowParagraph(!showParagraph);
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <MyDemo let={demoPropsHandler} />
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;