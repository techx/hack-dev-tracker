import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Project Details</h1>
      <p>This is the page for project with ID: {id}</p>
      {/* Placeholder for project progress bar */}
      <section>
        <h2>Project Progress</h2>
        {/* Placeholder for progress bar */}
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
