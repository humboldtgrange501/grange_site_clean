import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx'; 
import {About} from './pages/About.jsx'; 
import {Contact} from './pages/Contact.jsx'; 
import {Member} from './pages/Member.jsx'; 
import {Team} from './pages/Team.jsx';
import {History} from './pages/History.jsx'; 
import {Rentals} from './pages/Rentals.jsx';
import {Calendar} from './pages/Calendar.jsx';
import { Layout } from './Layout.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/history" element={<History />} />
          <Route path="/membership" element={<Member/>}/>
          <Route path="/about/officers" element={<Team />} />  
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/rentals" element={<Rentals/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;