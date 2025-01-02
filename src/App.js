import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './Components/TodoList';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
