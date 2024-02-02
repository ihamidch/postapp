
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner';
import BlogDetail from './Components/BlogDetail';
import Nav from './Components/Nav';
import Add from './Components/Add';
import Edit from './Components/Edit';

const App = () => {
  return (
    
   
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/BlogDetail/:id" element={<BlogDetail />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </Router>
    
  );
};

export default App;
