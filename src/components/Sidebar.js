import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/tables">Tables</Link>
      <Link to="/charts">Charts</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/kanban">Kanban Board</Link>
    </div>
  );
};

export default Sidebar;
