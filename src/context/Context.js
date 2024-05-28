import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
const Cart = createContext();
faker.seed(99)

function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
