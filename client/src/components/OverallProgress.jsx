import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import API_URL from '../config';

const OverallProgress = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Calculate overall progress for each project
        const projectsWithOverallProgress = data.map(project => {
          const totalProgress = project.goals.reduce((acc, goal) => acc + goal.progress, 0);
          const averageProgress = project.goals.length > 0 ? totalProgress / project.goals.length : 0;
          return { ...project, completion: averageProgress };
        });
        console.log('Projects with overall progress:', projectsWithOverallProgress); // Added log to inspect the projectsWithOverallProgress
        setProjects(projectsWithOverallProgress);
      } catch (error) {
        console.error("Could not fetch projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  // Additional log to inspect the projects state before rendering
  console.log('Projects state before rendering:', projects);

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <Progress value={project.completion} label={`${Math.round(project.completion)}%`} />
        </div>
      ))}
    </div>
  );
};

export default OverallProgress;
