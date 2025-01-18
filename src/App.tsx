import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import ProjectPage from './routes/projects/ProjectPage';
import ProjectView from './routes/projects/view/ProjectView';
import AboutPage from './routes/about/AboutPage';
import { Analytics } from "@vercel/analytics/react"
import Logbook from './routes/logbook/Logbook';
import BlogPage from './routes/blog/Blog';
import ArticleView from './routes/blog/article/ArticleView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/projects' element={ <ProjectPage /> } />
          <Route path='/projects/:name' element={ <ProjectView /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/logbook' element={ <Logbook /> } />
          <Route path='/blog' element={ <BlogPage /> } />
          <Route path='/blog/:name' element={ <ArticleView /> } />
        </Routes>
        <Analytics />
    </BrowserRouter>
  );
}

export default App;
