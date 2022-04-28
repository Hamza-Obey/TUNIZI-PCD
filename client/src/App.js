import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from './Pages/Home';


import Login from './Pages/Login'

import SentimentForm from './Components/Form';

function App() {
  return (
     <Router>
    <Routes>
      <Route path="/login" caseSensitive={false} element={<Login />} />
      <Route path="/signup" caseSensitive={false} element={<Signup />} />
      
      <Route path="/" caseSensitive={false} element={<SentimentForm />} />
      <Route path="/Home/:id" caseSensitive={false} element={<Home />} />
      <Route path="/Home" caseSensitive={false} element={<Home />} />

      
    </Routes>
  </Router>
  
  
  
);
  
}

export default App

