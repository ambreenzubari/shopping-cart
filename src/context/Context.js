import React, { createContext } from "react";

const Cart = createContext();

function Context({children}) {
  return (
    <Cart.Provider>
        {children}
    </Cart.Provider>
  )
}

export default Context;
