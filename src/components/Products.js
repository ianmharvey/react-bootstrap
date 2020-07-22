import React from "react";

import Container from "react-bootstrap/Container";

import Fetch from "./Fetch";

const Products = () => {
  return (
    <Container className="mt-5">
      <h1>Products</h1>
      <div className="code">Example of a fetch request component to get data from an IBM Cloudant database...</div>
      <Fetch />
    </Container>
  );
}

export default Products;
