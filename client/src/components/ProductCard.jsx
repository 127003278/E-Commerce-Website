import React from "react";

const ProductCard = ({ product }) => {


  const addToCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push(product);


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    alert("Product added to cart");
  };


  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        width="200"
      />

      <h3>
        {product.name}
      </h3>


      <p>
        ₹{product.price}
      </p>


      <button onClick={addToCart}>
        Add To Cart
      </button>


    </div>
  );
};


export default ProductCard;