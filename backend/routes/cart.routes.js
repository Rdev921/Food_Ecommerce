const express = require("express");
const { auth } = require("../middleware/auth.middleware");

const { CartModel } = require("../model/cart.model");
const cartRouter = express.Router();

cartRouter.get("/", auth, async (req, res) => {
  try {
    const products = await CartModel.find({ _id: userID });
    res.json({
      msg: `All products available in cart for ${userName}`,
      products,
    });
  } catch (error) {
    res.json({ err: error.message });
  }
});

// creating new Product in the cart with accepts id as a param
cartRouter.post("/create", auth, async (req, res) => {
  const {
    userID,
    username: user,
    brand,
    name,
    price,
    mrp,
    image1,
    image2,
    image3,
    rating,
  } = req.body;
  try {
    const product = new CartModel({
      userID,
      username: user,
      brand,
      name,
      price,
      mrp,
      image1,
      image2,
      image3,
      rating,
    });
    await product.save();
    res.json({
      mas: "New product has been added",
      product: {
        userID,
        username: user,
        brand,
        name,
        price,
        mrp,
        image1,
        image2,
        image3,
        rating,
      },
    });
  } catch (error) {
    res.json({ err: error.message });
  }
});

// upadating cart product with id accepts id as a param
cartRouter.patch("/update/:productID", auth, async (req, res) => {
  const { productID } = req.params;
  const object = req.body;
  delete object.user;
  const product = await CartModel.findOne({ _id: productID });
  try {
    await CartModel.findByIdAndUpdate({ _id: productID }, object);
    res.json({ msg: `${product.name} has been updated form cart` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// deleting product from cart with id accepts id as a param
cartRouter.delete("/delete/:productID", auth, async (req, res) => {
  const { productID } = req.params;
  const product = await CartModel.findOne({ _id: productID });
  try {
    await CartModel.findByIdAndDelete({ _id: productID });
    res.json({ msg: `${product.name} has been deleted` });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = {
  cartRouter,
};
