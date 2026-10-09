const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCartItems,
  removeFromCart,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

// Add product to cart
router.post("/", protect, addToCart);

// Get logged-in user's cart
router.get("/", protect, getCartItems);

// Remove item from cart
router.delete("/:id", protect, removeFromCart);

module.exports = router;