import './App.css';
import InputField from './components/InputField';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="head">The Rick and Morty API</span>
      <InputField />
    </div>
  );
};

export default App;
