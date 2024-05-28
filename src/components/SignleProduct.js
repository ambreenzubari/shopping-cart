import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <div className="justify-content-between d-flex">
            {cart.some((p) => p.id === prod.id) ? (
              <Button variant="danger"
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod })}
              >Remove from Cart</Button>
            ) : (
              <Button
                disabled={prod.inStock == 0}
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
              >
                {prod.inStock > 0 ? "Ad to Cart" : "Out of stock"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
