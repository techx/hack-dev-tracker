import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '@mantine/form';
import axios from 'axios';

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
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]);

  const submitTask = (values) => {
    // Placeholder for submitting the task to the backend
    console.log(values);
  };

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <div>
      <h1>Project Details</h1>
      <p>This is the page for project with ID: {id}</p>
      <section>
        <h2>Project Progress</h2>
        {/* Render project progress bar here */}
      </section>
      <section>
        <h2>Add New Task</h2>
        <form onSubmit={form.onSubmit((values) => submitTask(values))}>
          <input
            type="text"
            placeholder="Task Name"
            {...form.getInputProps('taskName')}
          />
          <textarea
            placeholder="Task Description"
            {...form.getInputProps('taskDescription')}
          />
          <input
            type="text"
            placeholder="Assignee"
            {...form.getInputProps('assignee')}
          />
          <input
            type="text"
            placeholder="GitHub PR Link"
            {...form.getInputProps('githubPR')}
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
      <section>
        <h2>Project Goals</h2>
        <ul>
          {project.goals.map((goal) => (
            <li key={goal.id}>
              {goal.name}
              {/* Render goal progress bar here */}
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
    </div>
  );
};

export default ProjectPage;
