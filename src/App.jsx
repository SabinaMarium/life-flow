import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Campaign from './components/Campaign';
import Impact from './components/Impact';
import RatingStars from './components/RatingStars';

function App() {
  return (
    <div>
     <Navbar></Navbar> 
     <Banner></Banner>
     <Campaign></Campaign>
     <Impact></Impact>
     <RatingStars></RatingStars>
     <Footer></Footer>
    </div>
  );
};

export default App;

