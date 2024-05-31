import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
    productDispatch,
  } = CartState();

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
          onClick={() => {
            productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHight" });
          }}
          checked={sort == "lowToHight" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="descending"
          name="group1"
          type="radio"
          id={"inline-2"}
          onClick={() => {
            productDispatch({ type: "SORT_BY_PRICE", payload: "HighToLow" });
          }}
          checked={sort == "HighToLow" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={() => {
            productDispatch({ type: "FILTER_BY_STOCK" });
          }}
          checked={byStock}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={() => {
            productDispatch({ type: "FILTER_BY_DELIVERY" });
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label className="ratingLabel">Rating:</label>
        <Rating
          rating={byRating}
          onClick={(rating) =>
            productDispatch({ type: "FILTER_BY_RATING", payload: rating })
          }
          style={{ cursor: "poiner" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productDispatch({ type: "CLEAR_FILTER" });
        }}
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Filters;
