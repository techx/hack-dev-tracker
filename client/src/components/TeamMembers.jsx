import React, { useState, useEffect } from 'react';
import { Button } from '@mantine/core';
import API_URL from '../config';

const TeamMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_URL}/team-members`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Could not fetch team members data:", error);
      }
    };

    fetchMembers();
  }, []);

  // Function to handle adding a new team member (placeholder for now)
  const handleAddMember = () => {
    // Placeholder function body
  };

  return (
    <div>
      <h2>Team Members</h2>
      <Button onClick={handleAddMember}>Add Team Member</Button>
      {members.map((member) => (
        <div key={member.id}>
          <h3>{member.name}</h3>
          <ul>
            {member.tasks && Array.isArray(member.tasks) ? (
              member.tasks.map((task, index) => (
                <li key={index}>{task.name}</li>
              ))
            ) : (
              <li>No tasks assigned</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
