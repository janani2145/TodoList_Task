import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import './App.css';
import StateTable from './Components/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/table" element={<StateTable />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
