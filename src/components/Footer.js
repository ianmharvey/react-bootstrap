import React from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container>
					<Stack direction="horizontal" gap={4}>
						<div>&copy;2021</div>
						<div className="ms-auto"><a href="//twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></div>
						<div><a href="//facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div>
						<div><a href="//instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></div>
					</Stack>
        </Container>
      </footer>
    )
  }
}

export default Footer;
