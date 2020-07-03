import React from "react";

import Container from "react-bootstrap/Container";

import Fetch from "./Fetch";

const Products = () => {
  return (
    <Container className="mt-5">
      <h1>Products</h1>
      <p className="mb-4"><code>Example of a fetch request component to get data from a Cloudant database...</code></p>
      <Fetch />
    </Container>
  );
}

export default Products;
