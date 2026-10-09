import React from "react";
import { useNavigate } from "react-router-dom";

import mobileImg from "../assets/images/images.jpg";
import laptopImg from "../assets/images/laptop.jpeg";
import watchImg from "../assets/images/watch.jpg";
import headphoneImg from "../assets/images/Headphones.jpg";


function Products() {

  const navigate = useNavigate();


  const products = [
    {
      id: 1,
      name: "Smart Phone",
      price: 25000,
      image: mobileImg,
      category: "Mobile"
    },
    {
      id: 2,
      name: "Laptop",
      price: 55000,
      image: laptopImg,
      category: "Laptop"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 5000,
      image: watchImg,
      category: "Watch"
    },
    {
      id: 4,
      name: "Wireless Headphone",
      price: 3000,
      image: headphoneImg,
      category: "Accessories"
    }
  ];


  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product added to cart");

  };


  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Our Products
      </h2>


      <div className="row">

        {
          products.map((product)=>(

            <div 
              className="col-md-3 mb-4" 
              key={product.id}
            >

              <div className="card h-100 shadow">


                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height:"220px",
                    objectFit:"contain"
                  }}
                />


                <div className="card-body text-center">


                  <h5>
                    {product.name}
                  </h5>


                  <p>
                    {product.category}
                  </p>


                  <h6>
                    ₹{product.price}
                  </h6>


                  <button
                    className="btn btn-primary me-2"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>


                  <button
                    className="btn btn-outline-dark"
                    onClick={() =>
                      navigate(
                        `/product/${product.id}`,
                        {
                          state: product
                        }
                      )
                    }
                  >
                    View Product
                  </button>


                </div>

              </div>

            </div>

          ))
        }


      </div>

    </div>

  );

}

export default Products;