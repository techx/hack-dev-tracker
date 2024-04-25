import React from 'react';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const CreateProjectForm = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },

    validate: {
      name: (value) => (value.length > 0 ? null : 'Project name is required'),
      description: (value) => (value.length > 0 ? null : 'Project description is required'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          required
          label="Project Name"
          placeholder="Enter project name"
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Project Description"
          placeholder="Enter project description"
          {...form.getInputProps('description')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Create Project</Button>
        </Group>
      </form>
    </Box>
  );
};

export default CreateProjectForm;
