import React from 'react';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
      <main>
       <h2>Main Content</h2>
       <card>Card</card>
       <card>Card</card>
       <card>Card</card>
      </main>
    </div>
  );
}

export default App;
