import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Meteor } from "meteor/meteor";
import { Container, Row, Col } from "reactstrap";
export const Layout: React.FC<{
  children: ReactNode;
  user: Meteor.User | null;
}> = ({ children, user }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav user={user} />
      </Row>

      <Row>
        <Col xs="1">
          <SideNav />
        </Col>
        <Col style={{ padding: "10px" }}>{children}</Col>
      </Row>
    </Container>
  );
};
