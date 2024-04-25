import React from 'react';
import { Progress } from '@mantine/core';

const ProgressTest = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Progress value={50} label="50%" />
    </div>
  );
};

export default ProgressTest;
