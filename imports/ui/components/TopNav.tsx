import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';export const TopNav = () => {
 return (
    <div>
      <Navbar color="dark" dark expand="md" container="fluid" fixed='top'>
        <NavbarBrand>IOT</NavbarBrand>
        <Nav pills>
            <NavItem><NavLink>Log In</NavLink></NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

