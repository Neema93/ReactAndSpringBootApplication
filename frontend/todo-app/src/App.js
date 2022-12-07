
import React from 'react';
import Counter from './components/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
     My Hello World.
     <Counter by={1}></Counter>
     <Counter by={5}></Counter>
     <Counter by={10}></Counter>
    </div>
  );
}

export default App;
