import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import About from './pages/about'; 
import Gallery from './pages/gallery'; 
import Contact from './pages/contact';
import Book from './pages/book'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
