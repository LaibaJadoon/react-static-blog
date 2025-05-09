import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/jsx/Header';
import Home from './components/jsx/Home'; 
import Category from './components/jsx/Category'; 
import Contact from './components/jsx/Contact';  

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
