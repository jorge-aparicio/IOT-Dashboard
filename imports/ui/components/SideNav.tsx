import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export const SideNav: React.FC<{
  isAuthenticated: boolean;
  isHome: boolean;
}> = ({ isAuthenticated, isHome }) => {
  return isAuthenticated ? (
    <Nav vertical tabs className="sidebar">
      <NavItem>
        <NavLink href="home" active={isHome}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="dashboard" active={!isHome}>
          Dashboard
        </NavLink>
      </NavItem>
    </Nav>
  ) : (
    <Nav vertical tabs className="sidebar">
      <NavItem>
        <NavLink href="home" active>
          Home
        </NavLink>
      </NavItem>
    </Nav>
  );
};
