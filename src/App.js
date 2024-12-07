import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Entrance from './components/Entrance';
import Anteroom from './components/Anteroom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/anteroom" element={<Anteroom />} />
      </Routes>
    </Router>
  );
}

export default App;