import { useEffect, useState } from "react";
import api from "../services/api";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {

    const token = localStorage.getItem("token");

    try {

      const res = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCart(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container mt-4">

      <h2>My Cart</h2>

      {
        cart.length === 0 ?

        <h4>Your Cart is Empty</h4>

        :

        cart.map(item => (

          <div
            key={item._id}
            className="card p-3 mb-3"
          >

            <h4>{item.product.name}</h4>

            <h5>₹{item.product.price}</h5>

            <p>Quantity : {item.quantity}</p>

          </div>

        ))
      }

    </div>

  );

}

export default Cart;