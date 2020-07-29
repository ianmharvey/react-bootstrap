import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaReact, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  // hook
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/"><FaReact /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/products" className="nav-link" onClick={() => setExpanded(expanded ? false : "expanded")}>Products</NavLink>
            <NavLink to="/phones" className="nav-link" onClick={() => setExpanded(expanded ? false : "expanded")}>Phones</NavLink>
            <NavLink to="/page3" className="nav-link" onClick={() => setExpanded(expanded ? false : "expanded")}>Page 3</NavLink>
            <NavLink to="/page4" className="nav-link" onClick={() => setExpanded(expanded ? false : "expanded")}>Page 4</NavLink>
          </Nav>
          <Navbar.Text>
            <a href="/" onClick={() => setExpanded(expanded ? false : "expanded")}><FaTwitter /></a>
            <a href="/" className="pl-3" onClick={() => setExpanded(expanded ? false : "expanded")}><FaFacebookF /></a>
            <a href="/" className="pl-3" onClick={() => setExpanded(expanded ? false : "expanded")}><FaInstagram /></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
