import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx'; 
import {About} from './pages/About.jsx'; 
import {Contact} from './pages/Contact.jsx'; 
import {Member} from './pages/Member.jsx'; 
import {Team} from './pages/Team.jsx';
import {Granges} from './pages/Granges.jsx';
import {History} from './pages/History.jsx'; 
import {Rentals} from './pages/Rentals.jsx';
import {Calendar} from './pages/Calendar.jsx';
import { Layout } from './Layout.jsx';
import { Login } from './pages/Login.jsx';
import { AdminDashboard } from './pages/AdminDashboard.jsx';
import  AssociateSignUp  from './sign_up_pages/AssociateSignUp.jsx';
import  IndividualSignUp  from './sign_up_pages/IndividualSignUp.jsx';
import  FamilySignUp  from './sign_up_pages/FamilySignUp.jsx';
import  JuniorSignUp  from './sign_up_pages/JuniorSignUp.jsx';
import  Confirmation  from './sign_up_pages/Confirmation.jsx';

import { Scholarships } from './pages/Scholarships.jsx';

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
          <Route path="/about/humboldt-county-granges" element={<Granges />} />  
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/rentals" element={<Rentals/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/scholarships" element={<Scholarships/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/sign-up-associate" element={<AssociateSignUp/>}/>
          <Route path="/sign-up-individual" element={<IndividualSignUp/>}/>
          <Route path="/sign-up-family" element={<FamilySignUp/>}/>
          <Route path="/sign-up-junior" element={<JuniorSignUp/>}/>
          <Route path="/sign-up-confirmation" element={<Confirmation/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;