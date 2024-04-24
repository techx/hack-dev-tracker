import React from 'react';
import OverallProgress from './OverallProgress';
import TeamMembers from './TeamMembers';

const LandingPage = () => {
  return (
    <div>
      <h1>Productivity Tracker</h1>
      <p>Welcome to the HackMIT Development Team's Productivity Tracker.</p>
      <OverallProgress />
      <TeamMembers />
    </div>
  );
};

export default LandingPage;
