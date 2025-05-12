import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/jsx/Header';
import Home from './components/jsx/Home'; 
import PostDetail from './components/jsx/PostDetail'; // Import the PostDetail component

const App = () => {
  const footerRef = useRef(null); // Create a reference for the footer

  return (
    <Router>
      <Header footerRef={footerRef} /> {/* Pass the footerRef to Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} /> {/* New Route for Full Post */}
      </Routes>
      <footer ref={footerRef} className="bg-black text-white">
        {/* Footer Content */}
      </footer>
    </Router>
  );
};

export default App;
