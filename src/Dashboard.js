import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css'; // Import the default styles

const Dashboard = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            // Style for the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/documentation" />}>Documentation</MenuItem>
        <MenuItem component={<Link to="/calendar" />}>Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}>E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Dashboard;
