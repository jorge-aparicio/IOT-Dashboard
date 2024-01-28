import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Meteor } from "meteor/meteor";

export const SideNav: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  return (
    <Nav vertical className="sidebar">
      <NavItem>
        <NavLink href="home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="dashboard">Dashboard</NavLink>
      </NavItem>
    </Nav>
  );
};
