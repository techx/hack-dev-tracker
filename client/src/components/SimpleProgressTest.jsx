import React from 'react';
import { Progress } from '@mantine/core';

const SimpleProgressTest = () => {
  console.log('Rendering SimpleProgressTest component');
  const progressElement = <Progress value={50} label="50%" />;
  console.log('Progress element:', progressElement);

  return progressElement;
};

export default SimpleProgressTest;
