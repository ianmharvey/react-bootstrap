import React from "react";

import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class Fetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const requestURL = new Request("/data.json", {
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
    /*
    const { error, isLoaded, items } = this.state;
    if (error) {
      console.log(error);
      return;
    } else {
      return true;
    }
    */

    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <p>Sorry, we couldn't load the data. Please refresh or try again later.</p>
      );
    } else if (!isLoaded) {
      return (
        <Spinner animation="border" variant="dark" />
      );
    } else {
      console.log("Call to API successful.");
      return (
				<>
					{items.map(item => (
            <ListGroup horizontal key={item.key} className="mb-4">
              <ListGroup.Item><img src={item.doc.image} width="150" height="150" alt={item.doc.product} /></ListGroup.Item>
							<ListGroup.Item><strong>{item.doc.manufacturer} {item.doc.product}</strong><br /><br />{item.doc.description} Price: ${item.doc.price}<br /><br /><Button className="float-end" variant="dark" onClick={(e) => this.handleClick(e, item.doc._id)}>Buy</Button></ListGroup.Item>
            </ListGroup>
          ))}
				</>
      );
    }
  }
}

export default Fetch;
