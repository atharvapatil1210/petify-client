import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FilterPage from './components/FilterPage';
import PetDataPage from './components/PetDataPage';
import UserProfile from './components/UserProfile';
import DogProfile from './components/DogProfile';
import ChatPage from './components/ChatPage';
import PaymentPage from './components/PaymentPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/pets" element={<PetDataPage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/dog-profile" element={<DogProfile />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
