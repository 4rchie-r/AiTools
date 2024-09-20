import React from 'react';
import './App.css';
import ToolList from './components/ToolList';
import TextCompletion from './components/TextCompletion';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Tools</h1>
      </header>
      <main>
        <ToolList />
        <TextCompletion />
        <SentimentAnalysis />
      </main>
    </div>
  );
}

export default App;