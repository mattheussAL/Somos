import React from 'react';

import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';
import Results from '../../components/Dashboard/Results';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Results />
    </>
  );
}

export default DashboardPage;