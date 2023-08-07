import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import Carrito from "../pages/Carrito";
const AppNavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  
  const logaut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  
  return (
    <div>
      <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            EDWARD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link variant="primary" onClick={handleShow}>
                    carrito
                  </Nav.Link>
                  <Nav.Link onClick={logaut}>salir</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CARRITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Carrito />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AppNavBar;
