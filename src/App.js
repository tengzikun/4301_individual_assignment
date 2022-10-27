import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Admission from './page/admission';
import Home from './page/home';
import NavBar from './page/navbar';
import Academic from './page/academic';

function App() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/admission' element={<Admission />} />
          <Route path='/home' element={<Home />} />
          <Route path='/academic' element={<Academic />} />
        </Routes>
      </Router>
  );
}

export default App;
