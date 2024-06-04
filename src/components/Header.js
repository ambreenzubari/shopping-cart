import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleToggle = () => setShow((prevShow) => !prevShow);

  // Media Query for Responsive Styles (Adjust breakpoints as needed)
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 80 }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>

          {/* Responsive Toggle for Smaller Screens */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Search Bar (Desktop/Tablet) */}
              {!isMobile && (
                <Navbar.Text className="search mx-auto">
                  <Navbar.Text className="search">
                    <FormControl
                      style={{ width: 500 }}
                      placeholder="Search a product"
                      className="m-auto"
                      onChange={(e) =>
                        productDispatch({
                          type: "FILTER_BY_SEARCH",
                          payload: e.target.value,
                        })
                      }
                    />
                  </Navbar.Text>
                </Navbar.Text>
              )}

             {!isMobile && ( <Dropdown align="end" className="cart">
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
                      <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Navbar.Text className="search">
              <Navbar.Text className="search">
                <FormControl
                  placeholder="Search"
                  className="m-auto"
                  onChange={(e) =>
                    productDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }
                />
              </Navbar.Text>
            </Navbar.Text>

            {/* Replace with your actual cart items if needed */}
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
                {/* Add a link to your cart page if needed */}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
