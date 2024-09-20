import React from 'react';
import './App.css';
import ToolList from './components/ToolList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Tools</h1>
      </header>
      <main>
        <ToolList />
      </main>
    </div>
  );
}

export default App;