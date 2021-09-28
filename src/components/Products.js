import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fetch from "./Fetch";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      <main>
         <Container>
          <Row>
            <Col>
              <h1>Products</h1>
            </Col>
          </Row>

          <Row>
						<Col>
              <Fetch />
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Products;
