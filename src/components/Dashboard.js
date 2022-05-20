import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - Poller';
  }, []);
  return <p>Dashboard</p>;
};

export default Dashboard;
