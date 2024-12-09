import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import ProjectPage from './routes/projects/ProjectPage';
import AboutPage from './routes/about/AboutPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/projects' element={ <ProjectPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
