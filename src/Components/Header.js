import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <Navbar className="py-4 " bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="text-white">KARAYOLLARI GENEL MÜDÜRLÜĞÜ</Navbar.Brand>
<br/>   <Navbar.Brand className="text-white">Kullanılan FrontEnd Çatısı: REACT JS (MERN) </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white">135.(ISPARTA) Şube Şefliği </Nav.Link>
            <br/>
            <Nav.Link className="text-white">Duyurular</Nav.Link>
            <br/>
            <Nav.Link className="text-white">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default Header;
