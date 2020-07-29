import React from "react";

import Container from "react-bootstrap/Container";

import Table from "./Table";

const Page3 = () => {
  const tableHeadings = [
    "Name",
    "Location",
    "Employee",
    "Consultant"
  ]

  const tableData = [
    {
      name: 'Xi Zheng',
      location: 'Belgium',
      employee: 'Y',
      consultant: ''
    },
    {
      name: 'Jane O\'Neill',
      location: 'Ireland',
      employee: '',
      consultant: 'Y'
    },
    {
      name: 'Jerry Moses',
      location: 'UK',
      employee: '',
      consultant: 'Y'
    },
    {
      name: 'Pat Johnson',
      location: 'Belgium',
      employee: 'Y',
      consultant: ''
    },
    {
      name: 'Mary Yazdi',
      location: 'Belgium',
      employee: 'Y',
      consultant: ''
    },
  ]

  return (
    <Container className="mt-5">
      <h1>Page 3</h1>
      <p>This is a page.</p>
      <div className="code">Another table example using the Table component with a different data set...</div>
      <Table tableHeadings={tableHeadings} tableData={tableData} />
    </Container>
  );
}

export default Page3;
