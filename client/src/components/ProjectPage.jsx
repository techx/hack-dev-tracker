import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextInput, Button, Textarea, Progress, Box, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import confetti from 'canvas-confetti';

const ProjectPage = () => {
  let { id } = useParams();
  const [project, setProject] = useState(null);
  const form = useForm({
    initialValues: {
      taskName: '',
      taskDescription: '',
      assignee: '',
      githubPR: '',
    },
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/projects/${id}`);
        console.log('Project data fetched:', response.data); // Added log for fetched data
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]); // Added ID as a dependency to re-fetch when ID changes

  useEffect(() => {
    if (project?.progress === 100) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [project?.progress]); // Added project.progress as a dependency

  const submitTask = (values) => {
    // Placeholder for submitting the task to the backend
    console.log(values);
  };

  if (!project) {
    return <div>Loading project details...</div>;
  }

  console.log('Rendering project with state:', project); // Log to check state during render

  return (
    <Box>
      <h1>Project Details</h1>
      <p>This is the page for project with ID: {id}</p>
      <section>
        <h2>Project Progress</h2>
        {/* Render project progress bar here */}
        {project.progress !== undefined && (
          <Progress value={project.progress} label={`${project.progress}%`} style={{ height: '20px', backgroundColor: '#f0f0f0', minWidth: '50px' }} />
        )}
      </section>
      <section>
        <h2>Add New Task</h2>
        <form onSubmit={form.onSubmit((values) => submitTask(values))}>
          <TextInput
            placeholder="Task Name"
            {...form.getInputProps('taskName')}
          />
          <Textarea
            placeholder="Task Description"
            {...form.getInputProps('taskDescription')}
          />
          <TextInput
            placeholder="Assignee"
            {...form.getInputProps('assignee')}
          />
          <TextInput
            placeholder="GitHub PR Link"
            {...form.getInputProps('githubPR')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Add Task</Button>
          </Group>
        </form>
      </section>
      <section>
        <h2>Project Goals</h2>
        <ul>
          {project.goals.map((goal) => (
            <li key={goal.id}>
              {goal.name}
              {/* Render goal progress bar here */}
              {goal.progress !== undefined && (
                <Progress value={goal.progress} label={`${goal.progress}%`} style={{ height: '20px', backgroundColor: '#f0f0f0', minWidth: '50px' }} />
              )}
              <ul>
                {goal.tasks.map((task) => (
                  <li key={task.id}>{task.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>GitHub Links</h2>
        {/* Render GitHub links here */}
      </section>
      <section>
        <h2>Team Members</h2>
        {/* Render team members here */}
      </section>
    </Box>
  );
};

export default ProjectPage;
