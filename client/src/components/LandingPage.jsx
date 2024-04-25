import React, { useState, useEffect } from 'react';
import OverallProgress from './OverallProgress';
import TeamMembers from './TeamMembers';
import CreateProjectForm from './CreateProjectForm';
import CreateTeamMemberForm from './CreateTeamMemberForm';
import axios from 'axios';
import API_URL from '../config';
import { Modal, Button } from '@mantine/core';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isTeamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`);
        setProjects(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleCreateProject = async (projectData) => {
    try {
      // Ensure the progress value is set to 0 for new projects
      const completeProjectData = { ...projectData, progress: 0 };
      const response = await axios.post(`${API_URL}/projects`, completeProjectData);
      setProjects([...projects, response.data]); // Update local state with the response from the server
      setProjectModalOpen(false); // Close modal
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  const handleCreateTeamMember = async (teamMemberData) => {
    try {
      await axios.post(`${API_URL}/team-members`, teamMemberData);
      // Update local state if needed
      setTeamMemberModalOpen(false); // Close modal
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>
      <p>Welcome to the HackMIT Development Team's Productivity Tracker.</p>
      <Button onClick={() => setProjectModalOpen(true)}>Add New Project</Button>
      <Button onClick={() => setTeamMemberModalOpen(true)}>Add New Team Member</Button>
      <Modal
        opened={isProjectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        title="Create New Project"
      >
        <CreateProjectForm onSubmit={handleCreateProject} />
      </Modal>
      <Modal
        opened={isTeamMemberModalOpen}
        onClose={() => setTeamMemberModalOpen(false)}
        title="Add New Team Member"
      >
        <CreateTeamMemberForm onSubmit={handleCreateTeamMember} projects={projects} />
      </Modal>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <OverallProgress projects={projects} />
      )}
      <TeamMembers />
    </div>
  );
};

export default LandingPage;
