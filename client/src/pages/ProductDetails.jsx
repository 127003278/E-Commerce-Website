import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const {id} = useParams();

  // temporary products (replace later with API)
  const products = [
    {
      id:1,
      name:"Product 1",
      price:500,
      image:"/images/product1.png",
      description:"Good quality product"
    },
    {
      id:2,
      name:"Product 2",
      price:700,
      image:"/images/product2.png",
      description:"Premium product"
    }
  ];


  const product = products.find(
    item=>item.id==id
  );


  if(!product)
  {
    return <h2>Product Not Found</h2>
  }


  return (
    <div className="product-details">

      <img 
      src={product.image}
      width="300"
      />

      <h1>{product.name}</h1>

      <h3>
        ₹{product.price}
      </h3>

      <p>
        {product.description}
      </p>


      <button>
        Add To Cart
      </button>

    </div>
  )
}

export default ProductDetails;