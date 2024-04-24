import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://b4ab214f2633.ngrok.app/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleAddTaskClick = (projectId) => {
    setSelectedProjectId(projectId);
    setShowAddTask(true);
  };

  const handleAddTaskSubmit = async () => {
    try {
      const response = await axios.post(`https://b4ab214f2633.ngrok.app/projects/${selectedProjectId}/tasks`, {
        name: newTaskName,
      });
      // Refresh the projects list to show the new task
      const updatedProjects = [...projects];
      const projectIndex = updatedProjects.findIndex(project => project.id === selectedProjectId);
      updatedProjects[projectIndex].tasks.push(response.data);
      setProjects(updatedProjects);
      // Reset the form and hide it
      setNewTaskName('');
      setShowAddTask(false);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => handleAddTaskClick(project.id)}>Add Task</button>
            {showAddTask && selectedProjectId === project.id && (
              <div>
                <input
                  type="text"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  placeholder="Task Name"
                />
                <button onClick={handleAddTaskSubmit}>Submit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
