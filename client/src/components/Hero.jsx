import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-primary text-white rounded p-5 my-4">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Welcome to MERN Shop
        </h1>

        <p className="lead">
          Discover the latest fashion, electronics, and accessories at the best prices.
        </p>

        <Link to="/products" className="btn btn-light btn-lg mt-3">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;