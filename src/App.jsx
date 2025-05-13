import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './components/Home/Home'; 
import PostDetail from './components/PostDetail/PostDetail'; 

const App = () => {
  const footerRef = useRef(null); // Keep the ref if needed in Header

  return (
    <Router>
      <Header footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Visiting the Root url Home Component will be displayed */}
        <Route path="/post/:postId" element={<PostDetail />} /> {/* Renders PostDetail component when user visits /post/1 */}
      </Routes>
      <Footer ref={footerRef} />
    </Router>
  );
};

export default App;
