import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProjectPage from './pages/projects/ProjectPage';
import AboutPage from './pages/about/AboutPage';
import PageContainer from './components/page-container/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/projects' element={ <ProjectPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
