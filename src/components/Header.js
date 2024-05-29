import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
function Header() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="search mx-auto">
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
                <Badge bg="success" className="ms-1">
                  {cart.length}
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartItem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImage"
                          alt={prod.name}
                        />
                        <div className="cartItemDetails">
                          <span>{prod.name}</span>
                          <span>${prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize={"20px"}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart" >
                      <Button style={{ width: "95%", margin: "0 10px" }}>Go To Cart</Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}> Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
