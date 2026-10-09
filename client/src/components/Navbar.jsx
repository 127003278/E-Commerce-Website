import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  return (

    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 30px",
      background:"#f5f5f5"
    }}>


      <h2 
      onClick={()=>navigate("/")}
      style={{cursor:"pointer"}}
      >
        My Shop
      </h2>



      <div>

        <button 
        onClick={()=>navigate("/")}
        style={{marginRight:"10px"}}
        >
          Home
        </button>


        <button 
        onClick={()=>navigate("/products")}
        style={{marginRight:"10px"}}
        >
          Products
        </button>


        <button 
        onClick={()=>navigate("/cart")}
        >
          Cart
        </button>


      </div>


    </nav>

  );
};


export default Navbar;