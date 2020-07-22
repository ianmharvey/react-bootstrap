import React from "react";

import Container from "react-bootstrap/Container";

import Table from "./Table";

const Page3 = () => {
  const tableHeadings = [
    "Name",
    "Location",
    "Department",
    "Employee",
    "Consultant"
  ]

  const tableData = [
    {
      name: 'Xi Zheng',
      location: 'Belgium',
      department: 'HR',
      employee: 'Y',
      consultant: ''
    },
    {
      name: 'Jane O\'Neill',
      location: 'Ireland',
      department: 'Sales',
      employee: '',
      consultant: 'Y'
    },
    {
      name: 'Jerry Moses',
      location: 'UK',
      department: 'Sales',
      employee: '',
      consultant: 'Y'
    },
    {
      name: 'Pat Johnson',
      location: 'Belgium',
      department: 'Technical Services',
      employee: 'Y',
      consultant: ''
    },
    {
      name: 'Mary Yazdi',
      location: 'Belgium',
      department: 'Technical Services',
      employee: 'Y',
      consultant: ''
    },
  ]

  return (
    <Container className="mt-5">
      <h1>Page 3</h1>
      <p>This is a page.</p>
      <p className="mb-4"><code>Another table example using the Table component with a different data set...</code></p>
      <Table tableHeadings={tableHeadings} tableData={tableData} />
    </Container>
  );
}

export default Page3;
