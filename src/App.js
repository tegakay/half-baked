import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Forms from './components/Forms';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/forms" element={<Forms />} />
  
      </Routes>
    </div>
  </Router>
  );
}

export default App;
