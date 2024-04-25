import React, { useState, useEffect } from 'react';
import OverallProgress from './OverallProgress';
import TeamMembers from './TeamMembers';
import axios from 'axios';
import API_URL from '../config';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <p>Welcome to the HackMIT Development Team's Productivity Tracker.</p>
      <OverallProgress projects={projects} />
      <TeamMembers />
    </div>
  );
};

export default LandingPage;
