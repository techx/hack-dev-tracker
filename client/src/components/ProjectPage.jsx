import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '@mantine/form';

const ProjectPage = () => {
  let { id } = useParams();
  const form = useForm({
    initialValues: {
      taskName: '',
      taskDescription: '',
      assignee: '',
      githubPR: '',
    },
  });

  const submitTask = (values) => {
    // Placeholder for submitting the task to the backend
    console.log(values);
  };

  return (
    <div>
      <h1>Project Details</h1>
      <p>This is the page for project with ID: {id}</p>
      {/* Placeholder for project progress bar */}
      <section>
        <h2>Project Progress</h2>
        {/* Placeholder for progress bar */}
      </section>
      {/* Form for adding new tasks */}
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
      {/* Placeholder for project goals and tasks */}
      <section>
        <h2>Project Goals</h2>
        {/* Placeholder for goals and tasks list */}
      </section>
      {/* Placeholder for GitHub PR and issue link attachments */}
      <section>
        <h2>GitHub Links</h2>
        {/* Placeholder for GitHub links */}
      </section>
      {/* Placeholder for team member assignment */}
      <section>
        <h2>Team Members</h2>
        {/* Placeholder for team member assignment */}
      </section>
    </div>
  );
};

export default ProjectPage;
