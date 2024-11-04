// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Login from './features/Login';
import Register from './features/Regsiter';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<h1>Welcome Home</h1>} />
      </Routes>
<Footer/>

    </>
  );
}

export default App;
