import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(3);
  return (
    <div className="filters">
      <span className="title"> Search products</span>
      <span>
        <Form.Check
          inline
          label="ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
        />
      </span>
      <span>
        <label className="ratingLabel">Rating:</label>
        <Rating rating={rate} onClick={(rating)=>setRate(rating)} style={{cursor:"poiner"}}/>
      </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  );
};

export default Filters;
