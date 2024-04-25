import React from 'react';
import { Select } from '@mantine/core';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

function TestSelectComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        label="Pick a framework"
        placeholder="Pick one"
        data={data}
        searchable
      />
    </div>
  );
}

export default TestSelectComponent;
