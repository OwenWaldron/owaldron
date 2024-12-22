import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import ProjectPage from './routes/projects/ProjectPage';
import ProjectView from './routes/projects/view/ProjectView';
import AboutPage from './routes/about/AboutPage';
import PostHogTracker from './posthog';
import Logbook from './routes/logbook/Logbook';

function App() {
  return (
    <BrowserRouter>
        <PostHogTracker />
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/projects' element={ <ProjectPage /> } />
          <Route path='/projects/:name' element={ <ProjectView /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/logbook' element={ <Logbook /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
