import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedGoalId, setSelectedGoalId] = useState(null); // Added state to track selected goal ID

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

  const handleAddTaskClick = (projectId, goalId) => {
    setSelectedProjectId(projectId);
    setSelectedGoalId(goalId); // Set the selected goal ID
    setShowAddTask(true);
  };

  const handleAddTaskSubmit = async () => {
    try {
      const response = await axios.post(`https://b4ab214f2633.ngrok.app/projects/${selectedProjectId}/goals/${selectedGoalId}/tasks`, {
        name: newTaskName,
      });
      // Refresh the projects list to show the new task
      const updatedProjects = [...projects];
      const projectIndex = updatedProjects.findIndex(project => project.id === selectedProjectId);
      const goalIndex = updatedProjects[projectIndex].goals.findIndex(goal => goal.id === selectedGoalId); // Find the index of the goal
      updatedProjects[projectIndex].goals[goalIndex].tasks.push(response.data); // Push the new task to the correct goal
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
            {project.goals.map((goal) => (
              <div key={goal.id}>
                {goal.name}
                <button onClick={() => handleAddTaskClick(project.id, goal.id)}>Add Task</button>
                {showAddTask && selectedProjectId === project.id && selectedGoalId === goal.id && (
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
                <ul>
                  {goal.tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
