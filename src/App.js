// App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner';
import BlogDetail from './Components/BlogDetail';
import Nav from './Components/Nav';
import Faches from './Components/Faches';

const App = () => {
  return (
    
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path="/BlogDetail/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
    // <>
    // <Faches/>
    // </>
    
  );
};

export default App;
