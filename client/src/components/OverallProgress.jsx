import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import API_URL from '../config';

const OverallProgress = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects data from backend');
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received from backend:', data);
        setProjects(data);
        console.log('Projects state after setting data:', projects);
      } catch (error) {
        console.error("Could not fetch projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <Progress value={project.completion} label={`${project.completion}%`} />
        </div>
      ))}
    </div>
  );
};

export default OverallProgress;
