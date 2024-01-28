import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {  Nav, NavItem, NavLink } from 'reactstrap';

export const SideNav = () => {
  return (
   
      <Nav vertical className='sidebar'>
        <NavItem>
          <NavLink href="home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="dashboard">Dashboard</NavLink>
        </NavItem>
      </Nav>
  );
};

