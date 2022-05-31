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
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </>    
  );
}

export default App;
