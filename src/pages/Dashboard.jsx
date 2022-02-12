import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFilePost } from "react-icons/bs";

function Dashboard() {
  return (
    <Container className="dashboard">
      <Row>
        <Col sm={12} md={4}>
          <div className="dashboard__iconWrapper">
            <BsFilePost className="dashboard__icon" />
          </div>
          <span className="dashboard__">Number of posts</span>
        </Col>
        <Col sm={12} md={4}></Col>
        <Col sm={12} md={4}></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
