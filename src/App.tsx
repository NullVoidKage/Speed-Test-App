// App.tsx
import React, { useState } from 'react';
import Timer from './components/Timer';
import StartButton from './components/StartButton';
import SpeedDisplay from './components/SpeedDisplay';


const App: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTest = () => {
    // Implement your logic to start the test
  };

  return (
    <div className="app">
      <Timer time={time} />
      <StartButton onClick={startTest} />
      <SpeedDisplay />

    </div>
  );
};

export default App;
