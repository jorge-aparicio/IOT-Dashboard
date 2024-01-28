import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { Container, Row, Col } from "reactstrap";

export const Layout: React.FC<{
  children: ReactNode;
  isAuthenticated: boolean;
  isHome: boolean;
}> = ({ children, isAuthenticated, isHome }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav isAuthenticated={isAuthenticated} />
      </Row>

      <Row>
        <Col xs={1}>
          <SideNav isAuthenticated={isAuthenticated} isHome={isHome} />
        </Col>
        <Col xs="11" style={{ paddingTop: "10px", paddingRight: "60px" }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
