import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SignleProduct";
import "./styles.css";
import Filters from "./Filters";

function Home() {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = CartState();
  const transformProducts = () => {
    let sortedProducts = products

    if(sort){
      sortedProducts=sortedProducts.sort((a,b) => 
        sort==="lowToHight"?a.price-b.price:b.price-a.price
      )
    }
    if(!byStock){
      sortedProducts=sortedProducts.filter((prod)=>{
        return prod.inStock
      })
    }
    if(byFastDelivery){
      sortedProducts=sortedProducts.filter((prod)=>{
        return prod.fastDelivery
      })
    }

    if(byRating){
      sortedProducts=sortedProducts.filter((prod)=>{
        return prod.rating>=byRating
      })
    }

    if(searchQuery){
      sortedProducts=sortedProducts.filter((prod)=>{
        return prod.name.toLowerCase().includes(searchQuery) 
      })
    }
    return sortedProducts
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
