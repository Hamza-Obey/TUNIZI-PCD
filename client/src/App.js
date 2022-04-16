import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Graph from './Components/PieChart';
import AreaChart from './Components/AreaChart';
import Home from './Pages/Home';


import Login from './Pages/Login'
import Sidebar1 from './Components/Sidebar1';
import SentimentForm from './Components/Form';

function App() {
  return (
     <Router>
    <Routes>
      <Route path="/login" caseSensitive={false} element={<Login />} />
      
      <Route path="/" caseSensitive={false} element={<SentimentForm />} />
      <Route path="/Home" caseSensitive={false} element={<Home />} />

      
    </Routes>
  </Router>
  
  
);
  
}

export default App

