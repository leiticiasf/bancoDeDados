import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Login from './pages/login';
import axios from 'axios';

function App() {
    return (
      <Router>
        {}
        <Routes>
          {}
          <Route path="/Home" element={<Home />} />        
         {}
          <Route path="/Cadastro" element={<Cadastro />} />
          {}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }
  export default App;
  