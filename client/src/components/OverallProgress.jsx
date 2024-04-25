import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import confetti from 'canvas-confetti';

const OverallProgress = ({ projects }) => {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    console.log('Projects data:', projects); // Log to check the projects data
    if (projects && projects.length > 0) {
      // Log each project's progress value
      projects.forEach(project => {
        console.log(`Project: ${project.name}, Progress: ${project.progress}`);
      });

      // Calculate the overall progress based on the progress of each project
      const totalProgress = projects.reduce((total, project) => {
        if (typeof project.progress === 'number') {
          return total + project.progress;
        } else {
          console.error(`Invalid progress value for project: ${project.name}`);
          return total;
        }
      }, 0);
      const progress = totalProgress / projects.length;
      setOverallProgress(progress);
      console.log('Calculated overall progress:', progress); // Log to check the calculated progress

      // Trigger confetti when overall progress reaches 100%
      if (progress === 100) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      // If projects data is not available, set a default progress value
      setOverallProgress(0);
    }
  }, [projects]);

  // Additional logging to check the rendered JSX elements
  console.log('Rendering Progress component with value:', overallProgress);

  // Additional detailed logging to check the state right before rendering
  console.log('OverallProgress state before rendering:', { overallProgress, projects });

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects && projects.length > 0 ? (
        <Progress value={overallProgress} label={`${overallProgress}%`} color="blue" styles={{ bar: { minWidth: '2%', height: '20px' } }} />
      ) : (
        // Render a default progress bar if projects data is not available
        <Progress value={0} label="0%" color="blue" styles={{ bar: { minWidth: '2%', height: '20px' } }} />
      )}
    </div>
  );
};

export default OverallProgress;
