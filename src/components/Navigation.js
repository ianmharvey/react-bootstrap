import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Container>
			<Navbar.Brand href="/"><img src="/images/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/products">Products</Nav.Link>
					<Nav.Link href="/essay">Essay</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="//twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></Nav.Link>
					<Nav.Link href="//facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Nav.Link>
					<Nav.Link href="//instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
  );
}

export default Navigation;
