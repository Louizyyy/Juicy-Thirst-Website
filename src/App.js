import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/page/Home';
import About from './components/page/about';
import Contact from './components/page/Contact';
import Signup from './components/page/Signup'; // Import the Signup component
import Login from './components/page/Login'; // Import the Login component

import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
