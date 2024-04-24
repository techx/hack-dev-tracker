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
            {member.projects && Array.isArray(member.projects) ? (
              member.projects.map((project, index) => (
                <li key={index}>{project.name}</li>
              ))
            ) : (
              <li>No projects assigned</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
