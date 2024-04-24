import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProjectPage from './components/ProjectPage';
import ProjectsList from './components/ProjectsList'; // Assuming there is a component to list all projects
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsList />} /> {/* Added this line */}
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
