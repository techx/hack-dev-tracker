import React from 'react';
import { TextInput, Button, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';

const CreateTeamMemberForm = ({ onSubmit, projects }) => {
  const form = useForm({
    initialValues: {
      name: '',
      role: '',
      projectId: '',
    },

    validate: {
      name: (value) => (value.length > 0 ? null : 'Name is required'),
      role: (value) => (value.length > 0 ? null : 'Role is required'),
      projectId: (value) => (value.length > 0 ? null : 'Project is required'),
    },
  });

  const projectOptions = projects.map((project) => ({
    value: project.id.toString(),
    label: project.name,
  }));

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          required
          label="Name"
          placeholder="Enter team member's name"
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Role"
          placeholder="Enter team member's role"
          {...form.getInputProps('role')}
        />
        <Select
          label="Project"
          placeholder="Select project"
          data={projectOptions}
          {...form.getInputProps('projectId')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Add Team Member</Button>
        </Group>
      </form>
    </Box>
  );
};

export default CreateTeamMemberForm;
