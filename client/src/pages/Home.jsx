import { Link } from "react-router-dom";
import mobile from "../assets/images/images.jpg";
import laptop from "../assets/images/laptop.jpeg";
import watch from "../assets/images/watch.jpg";
import headphone from "../assets/images/Headphones.jpg";

function Home() {
  const featuredProducts = [
    {
      name: "iPhone 16",
      image: mobile,
      price: "₹79,999",
    },
    {
      name: "MacBook Air",
      image: laptop,
      price: "₹94,999",
    },
    {
      name: "Apple Watch",
      image: watch,
      price: "₹39,999",
    },
    {
      name: "Sony WH-1000XM5",
      image: headphone,
      price: "₹19,999",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to TechKart</h1>

          <p className="lead">
            Buy the Latest Electronics at the Best Prices.
          </p>

          <Link to="/products" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">
          {featuredProducts.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shadow h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center">
                  <h5>{item.name}</h5>

                  <h4 className="text-success">{item.price}</h4>

                  <Link
                    to="/products"
                    className="btn btn-primary mt-3"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="container mt-5 mb-5">
        <div className="card shadow p-4">
          <h2>Why Choose TechKart?</h2>

          <p className="mt-3">
            TechKart is a MERN Stack e-commerce application developed using
            React, Node.js, Express.js, and MongoDB. Users can register, log in,
            browse products, add items to their cart, and enjoy a simple and
            responsive shopping experience.
          </p>

          <Link to="/products" className="btn btn-success mt-3">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;