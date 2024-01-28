import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';import { Meteor } from 'meteor/meteor';
export const TopNav: React.FC<{user: Meteor.User | null}> = ({user}) => {
  const [isAuthenticated] = useState(user !== null);
 return (
    !isAuthenticated  ? <div>
      <Navbar color="dark" dark expand="md" container="fluid" fixed='top'>
        <NavbarBrand>IOT</NavbarBrand>
        <Nav pills>
            <NavItem><NavLink href="login" active datatype='pill'>Log In</NavLink></NavItem> 
        </Nav>
      </Navbar>
    </div>
:
    <div>
      <Navbar color="dark" dark expand="md" container="fluid" fixed='top'>
        <NavbarBrand>IOT</NavbarBrand>
        <Nav pills>
             <NavItem><NavLink href="logout" active datatype='pill'>Log Out</NavLink></NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

