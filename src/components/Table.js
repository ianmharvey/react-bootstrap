import React from "react";

// Simple component
const TableHeader = props => {

//console.log(props.tableHeadings);

  return (
    <thead>
      <tr>
        {props.tableHeadings.map((value, index) => {
          return <th key={index}>{value}</th>
        })}
      </tr>
    </thead>
  )
}

// Simple component
const TableBody = props => {

  //console.log(props.tableData.length);

  const rows = props.tableData.map((row, index) => {

    const arr = [];
    arr.push(Object.values(row))

    const items = [];
    for (let i=0; i<arr[0].length; i++) {
      items.push(arr[0][i])
    }
    console.log(items);

    return (
      <tr key={index}>
        {items.map((value, index) => {
          return <td key={index}>{value}</td>
        })}
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

// Class component
class Table extends React.Component {
  render() {
    const { tableData } = this.props;
    const { tableHeadings } = this.props;

    return (
      <table className="table-bordered table-hover mb-5">
        <TableHeader tableHeadings={tableHeadings} />
        <TableBody tableData={tableData} />
      </table>
    )
  }
}

export default Table;
