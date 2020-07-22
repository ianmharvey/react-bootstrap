import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slider from "./Carousel";
import Table from "./Table";

const Main = () => {
  const name = 'Guest';

  const tableHeadings = [
    "Manufacturer",
    "Model",
    "In Stock"
  ]


  const tableData = [
    {
      manufacturer: 'Apple',
      model: 'iPhone X',
      available: 13
    },
    {
      manufacturer: 'Apple',
      model: 'iPhone 11',
      available: 5
    },
    {
      manufacturer: 'Apple',
      model: 'iPhone 11 Pro',
      available: 0
    },
    {
      manufacturer: 'Samsung',
      model: 'Galaxy Fold',
      available: 9
    },
    {
      manufacturer: 'Samsung',
      model: 'Galaxy Z Flip',
      available: 4
    },
     {
      manufacturer: 'Samsung',
      model: 'Galaxy S10',
      available: 22
    },
  ]

  return (
    <> {/* fragment */}
      <Slider />
      <Container className="mt-5">
        <h1>Home</h1>
        <p>Welcome, {name}! This demo site is built with Node.js, IBM Cloudant, <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">react-bootstrap</a>, and uses <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">React Router</a>.</p>
        <p className="mb-4"><code>Example of rendering a Table component:</code></p>

        <Table tableHeadings={tableHeadings} tableData={tableData} />

        <h2>Rows / Cols</h2>
        <Row>
          <Col className="border mb-5">1 of 3</Col>
          <Col className="border mb-5">2 of 3</Col>
          <Col className="border mb-5">3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
