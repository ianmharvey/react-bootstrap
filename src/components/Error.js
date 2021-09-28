import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Error = () => {
  return (
    <>
      <main>
        <Container>
          <Row>
            <Col>
              <h1>Oops!</h1>
              <p>Sorry, but that page doesn't exist.</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Error;