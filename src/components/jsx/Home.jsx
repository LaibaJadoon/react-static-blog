import React from 'react';
import TechPost from './TechPost'; // Import the TechPost component (make sure the path is correct)
import CardsContainer from './CardsContainer';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* Adding the TechPost container here */}
      <TechPost />
      
      {/* We can add more posts or other content here */}
      <CardsContainer/>
      <Footer/>
    </div>
  
  );
};

export default Home;