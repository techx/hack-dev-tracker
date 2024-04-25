import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import confetti from 'canvas-confetti';

const OverallProgress = ({ projects }) => {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    console.log('Projects data:', projects); // Log to check the projects data
    if (projects && projects.length > 0) {
      // Log each project's completion value
      projects.forEach(project => {
        console.log(`Project: ${project.name}, Completion: ${project.completion}`);
      });

      // Calculate the overall progress based on the completion of each project
      const totalCompletion = projects.reduce((total, project) => {
        if (typeof project.completion === 'number') {
          return total + project.completion;
        } else {
          console.error(`Invalid completion value for project: ${project.name}`);
          return total;
        }
      }, 0);
      const progress = totalCompletion / projects.length;
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

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects && projects.length > 0 ? (
        <Progress value={overallProgress} label={`${overallProgress}%`} color="blue" styles={{ bar: { minWidth: '0%', height: '20px' } }} />
      ) : (
        // Render a default progress bar if projects data is not available
        <Progress value={0} label="0%" color="blue" styles={{ bar: { minWidth: '0%', height: '20px' } }} />
      )}
    </div>
  );
};

export default OverallProgress;
