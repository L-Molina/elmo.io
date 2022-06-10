import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoutouts from './components/pages/Shoutouts';
import Footer from './components/Footer/Footer';
import BowserGuide from './components/pages/BowserGuide';
import SSBUCareer from './components/pages/SSBUCareer';
import Description from './components/pages/Description';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GroundMoves from './components/pages/BowserGuideSections/GroundMoves';
import Aerials from './components/pages/BowserGuideSections/Aerials';
import SpecialMoves from './components/pages/BowserGuideSections/SpecialMoves';
import Neutral from './components/pages/BowserGuideSections/Neutral';
import Advantage from './components/pages/BowserGuideSections/Advantage';
import Throws from './components/pages/BowserGuideSections/Throws';
import Disadvantage from './components/pages/BowserGuideSections/Disadvantage';
import Other from './components/pages/BowserGuideSections/Other';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ssbucareer' element={<SSBUCareer />}/>
          <Route path='/description' element={<Description />} />
          <Route path='/shoutouts' element={<Shoutouts />} />
          <Route path='/bowser-guide' element={<BowserGuide />} />
          <Route path='/bowser-guide/ground-moves' element={<GroundMoves/>} />
          <Route path='/bowser-guide/aerials' element={<Aerials/>} />
          <Route path='/bowser-guide/special-moves' element={<SpecialMoves/>} />
          <Route path='/bowser-guide/throws' element={<Throws/>} />
          <Route path='/bowser-guide/neutral' element={<Neutral/>} />
          <Route path='/bowser-guide/advantage' element={<Advantage/>} />
          <Route path='/bowser-guide/disadvantage' element={<Disadvantage/>} />
          <Route path='/bowser-guide/other' element={<Other/>} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </>    
  );
}

export default App;
