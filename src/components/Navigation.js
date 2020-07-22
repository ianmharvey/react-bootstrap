import React from "react";
import { NavLink } from "react-router-dom";

import { FaReact, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/"><FaReact /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/products" className="nav-link">Products</NavLink>
            <NavLink to="/phones" className="nav-link">Phones</NavLink>
            <NavLink to="/page3" className="nav-link">Page 3</NavLink>
            <NavLink to="/page4" className="nav-link">Page 4</NavLink>
          </Nav>
          <Navbar.Text>
            <a href="/"><FaTwitter /></a>
            <a href="/" className="pl-3"><FaFacebookF /></a>
            <a href="/" className="pl-3"><FaInstagram /></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
