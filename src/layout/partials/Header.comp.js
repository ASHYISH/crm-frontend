import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/images (1).jpeg";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/orders">
            <Nav.Link>Orders</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
