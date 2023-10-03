import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {Logo} from '../../../assets';

const Header = () => {
  return (
    <Navbar expand="lg" className="fixed-top shadow-sm bg-white">
      <Container>
        {/* <img src={Logo} alt="logo"/> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant='outline-primary'>Search</Button>
                    </Col>
                </Row>
            </Form>
            <Nav.Link href="#link">Bang Eko</Nav.Link>
            <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
