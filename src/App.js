import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Twitter from './components/pages/Twitter';
import Shoutouts from './components/pages/Shoutouts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/twitter' element={<Twitter />} />
          <Route path='/shoutouts' element={<Shoutouts />} />
        </Routes>
      </Router>
    </>    
  );
}

export default App;
