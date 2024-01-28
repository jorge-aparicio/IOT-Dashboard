import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export const SideNav: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  return isAuthenticated ? (
    <Nav vertical className="sidebar">
      <NavItem>
        <NavLink href="home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="dashboard">Dashboard</NavLink>
      </NavItem>
    </Nav>
  ) : (
    <Nav vertical className="sidebar">
      <NavItem>
        <NavLink href="home">Home</NavLink>
      </NavItem>
    </Nav>
  );
};
