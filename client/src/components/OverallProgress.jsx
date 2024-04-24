import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import API_URL from '../config';

const OverallProgress = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('Initial projects state:', projects); // Log initial state
    const fetchProjects = () => {
      console.log('Fetching projects data from backend');
      fetch(`${API_URL}/projects`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Data received from backend:', data);
          // Additional log to inspect the structure of the received data
          console.log('Inspecting data structure:', JSON.stringify(data, null, 2));
          setProjects(data);
        })
        .then(() => {
          console.log('Projects state after setting data:', projects); // Log state after setting data
        })
        .catch(error => {
          console.error("Could not fetch projects data:", error);
        });
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    console.log('Projects state in useEffect after setting data:', projects); // Log state in useEffect after setting data
  }, [projects]);

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
