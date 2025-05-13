import React from 'react';
import TechPost from '../Home/TechPost'; 
import CardsContainer from '../Home/CardsContainer';


const Home = () => {
  return (
    <div>
      {/* Adding Featured Post */}
      <TechPost />
      
      {/* Adding All Posts*/}
      <CardsContainer/>
    </div>
  );
};

export default Home;
