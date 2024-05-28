import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

function SingleProduct({ prod }) {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>${prod.price.split(".")[0]}</span>
            {prod.fastDelivery?(
              <div>Fast Delivery</div>
            ):(
              <div>4 days Delivery</div>
            )}
            <Rating rating={prod.rating}/>
          </Card.Subtitle>
      <div className="justify-content-between d-flex">
      <Button variant="danger">Remove from Cart</Button>
           <Button disabled={prod.inStock==0}>{prod.inStock>0?"Ad to Cart":'Out of stock'}</Button>
      </div>

        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
