import React from 'react';

import InProgress from './InProgress';
import NextEvidences from './NextEvidences';

import { Student } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Student>Olá, Ana Luiza</Student>
      <InProgress /> 
      <NextEvidences />
    </>
  );
}

export default Dashboard;