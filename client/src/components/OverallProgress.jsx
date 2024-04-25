import React, { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import confetti from 'canvas-confetti';

const OverallProgress = ({ projects }) => {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    if (projects && projects.length > 0) {
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

      if (progress === 100) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      setOverallProgress(0);
    }
  }, [projects]);

  return (
    <div>
      <h2>Overall Project Progress</h2>
      {projects && projects.length > 0 ? (
        <Progress value={overallProgress} label={`${overallProgress}%`} color="blue" styles={{ bar: { minWidth: '10%', height: '20px', backgroundColor: '#0074D9', border: '1px solid #999' } }} />
      ) : (
        <Progress value={0} label="0%" color="blue" styles={{ bar: { minWidth: '10%', height: '20px', backgroundColor: '#0074D9', border: '1px solid #999' } }} />
      )}
    </div>
  );
};

export default OverallProgress;
