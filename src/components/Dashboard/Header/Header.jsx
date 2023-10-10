import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Header.module.css";
import { logout } from "../../../store/Auth";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="fixed-top shadow-sm bg-white">
      <Container>
        <img
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/Assets/Dashboard/Logo.png`}
          alt="logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link href="#home">
          <img
            className={styles.menuButton}
            src={`${process.env.PUBLIC_URL}/Assets/Dashboard/fi_menu.png`}
            alt="menu"
          />
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button role="button" className={styles.searchButton} variant="outline-primary">
                Search
              </Button>
            </Form>
            <Nav.Link href="#link">Admin</Nav.Link>
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onClick={handleLogout} role="logout">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
