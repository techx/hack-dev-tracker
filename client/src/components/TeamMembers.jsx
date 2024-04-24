import React, { useState, useEffect } from 'react';
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
        console.log('Data received from backend for team members:', data);
        // Additional log to inspect the structure of the received data
        console.log('Inspecting team members data structure:', JSON.stringify(data, null, 2));
        setMembers(data);
      } catch (error) {
        console.error("Could not fetch team members data:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Team Members</h2>
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
