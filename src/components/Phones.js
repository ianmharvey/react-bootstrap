import React from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Phones extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    /*
    To fetch a local file use:
    Ex: fetch("/data/data.json")
    Ex: fetch("http://localhost:3000/data/data.json")
    */

    const requestURL = new Request("https://3ba80cff-5997-4a6f-83c2-d0453acd7c78-bluemix.cloudantnosqldb.appdomain.cloud/development/_all_docs?include_docs=true", {
      method: 'GET'
    });

    fetch(requestURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.rows
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick(e, id) {
    e.preventDefault();
    console.log(id + ": Added to shopping cart");
    alert("Added to shopping cart");
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      //return <div>Error: {error.message}</div>;
      return (
        <Container className="mt-5">
          <p>Sorry, we are having technical difficulties connecting to the database. Please try again later.</p>
        </Container>
      );
    } else if (!isLoaded) {
      return (
        <Container className="mt-5">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      );
    } else {
      console.log("Call to Cloudant successful.");
      return (
        <Container className="mt-5">
          <h1>Phones</h1>
          <div className="code">This page uses a direct fetch request to get data from an IBM Cloudant database...</div>

          <CardColumns>
            {items.map((item, index) => (
              <Card style={{ width: "auto" }} key={item.key} id={index}>
                <Card.Img variant="top" src="https://via.placeholder.com/180x80.png/aaa/fff?text=image" alt={item.doc.manufacturer} />
                <Card.Body>
                  <Card.Title>{item.doc.manufacturer} {item.doc.product}</Card.Title>
                  <Card.Text>{item.doc.description}</Card.Text>
                  <Card.Text>${item.doc.price}</Card.Text>
                  <Button variant="dark" onClick={(e) => this.handleClick(e, item.doc._id)}>Buy</Button>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Container>
      );
    }
  }
}

export default Phones;
