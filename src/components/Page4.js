import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Page4 = () => {
  return (
    <Container className="mt-5">
      <h1>Page 4</h1>
      <p>This is a page.</p>
      <div className="code">A simple template page. Customize using Bootstrap's grid system and components...</div>
      <Row>
        <Col className="border mb-5">
          <p>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                Lorem Ipsum is simply dummy text.
              </Tooltip>
            }
          >
          <span><strong>Lorem ipsum</strong> </span>
          </OverlayTrigger>
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
        <Col className="border mb-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
        <Col className="border mb-5">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Page4;
