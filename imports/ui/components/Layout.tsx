import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Meteor } from "meteor/meteor";
import { Container, Row, Col } from "reactstrap";
export const Layout: React.FC<{
  children: ReactNode;
  isAuthenticated: boolean;
}> = ({ children, isAuthenticated }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav isAuthenticated={isAuthenticated} />
      </Row>

      <Row>
        <Col xs="1">
          <SideNav isAuthenticated={isAuthenticated} />
        </Col>
        <Col style={{ padding: "10px" }}>{children}</Col>
      </Row>
    </Container>
  );
};
