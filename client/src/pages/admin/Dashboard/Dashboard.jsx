import React from 'react';
import Admin from '../../../containers/Admin/Admin';
import './Dashboard.scss';

const Dashboard = props => {
  return (
    <Admin>
      <p>This is the dashboard. This is a protected route!</p>
    </Admin>
  );
};

export default Dashboard;
