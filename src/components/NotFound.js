import React from 'react';
import { Link } from 'react-router-dom';
import { TiWarning } from 'react-icons/ti';
import notFoundStyle from './notFound.module.scss';

export const NotFound = () => {
  return (
    <div className={notFoundStyle.container}>
      <TiWarning className={notFoundStyle.icon} />
      <h1>404</h1>
      <p>Wowzer this is an area that does not exist!</p>
      <Link to="/dashboard">Return to dashboard</Link>
    </div>
  );
};
