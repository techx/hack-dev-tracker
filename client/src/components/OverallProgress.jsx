import React, { useState, useEffect } from 'react';
import { Progress, Button } from '@mantine/core';
import confetti from 'canvas-confetti';
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

  useEffect(() => {
    // Check if any project has reached 100% completion and trigger confetti
    projects.forEach(project => {
      if (project.completion === 100) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    });
  }, [projects]);

  // Additional log to inspect the projects state before rendering
  console.log('Projects state before rendering:', projects);

  // Function to handle adding a new task (placeholder for now)
  const handleAddTask = (projectId) => {
    console.log(`Add task for project with ID: ${projectId}`);
    // Placeholder function body
  };

  // Debugging: Log each project's completion value before rendering the Progress component
  projects.forEach(project => {
    console.log(`Rendering progress for project "${project.name}" with completion: ${project.completion}%`);
  });

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects.length > 0 ? projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <Progress value={project.completion} label={`${Math.round(project.completion)}%`} color={project.completion > 0 ? 'blue' : 'gray'} styles={{ bar: { minWidth: project.completion > 0 ? '0%' : '2%' } }} />
          <Button onClick={() => handleAddTask(project.id)}>Add Task</Button>
        </div>
      )) : <p>Loading project progress...</p>}
    </div>
  );
};

export default OverallProgress;
