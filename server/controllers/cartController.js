const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add Product to Cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Check if product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Check if already in cart
        let cartItem = await Cart.findOne({
            user: req.user._id,
            product: productId
        });

        if (cartItem) {
            cartItem.quantity += quantity || 1;
            await cartItem.save();

            return res.status(200).json(cartItem);
        }

        cartItem = await Cart.create({
            user: req.user._id,
            product: productId,
            quantity: quantity || 1
        });

        res.status(201).json(cartItem);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Logged-in User Cart
const getCartItems = async (req, res) => {
    try {

        const cart = await Cart.find({
            user: req.user._id
        }).populate("product");

        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Remove Item
const removeFromCart = async (req, res) => {

    try {

        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).json({
                message: "Item not found"
            });
        }

        await cartItem.deleteOne();

        res.json({
            message: "Item removed successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

};

module.exports = {
    addToCart,
    getCartItems,
    removeFromCart
};