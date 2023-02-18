import React from "react";
import Container from 'react-boostrap/Container';
import Navbar from 'react-boostrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation ({}) {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation;