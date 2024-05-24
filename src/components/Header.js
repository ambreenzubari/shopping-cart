import React from "react";
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="search mx-auto" >
          <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
          </Navbar.Text>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize={"24px"} />
                <Badge bg="success" className="ms-1">{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}> Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
