import React from 'react';
import { Select } from '@mantine/core';

const SimpleSelectTest = () => {
  const data = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <div>
      <Select
        label="Simple Select"
        placeholder="Select option"
        data={data}
      />
    </div>
  );
};

export default SimpleSelectTest;
