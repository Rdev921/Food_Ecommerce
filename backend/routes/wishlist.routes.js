const express = require("express");
const { auth } = require("../middleware/auth.middleware");

const { WishlistModel } = require("../model/wishlist.model");
const wishlistRouter = express.Router();

wishlistRouter.get("/", async (req, res) => {
  try {
    const products = await WishlistModel.find(req.body);
    res.json({
      msg: `All products available in wishlist`,
      products,
    });
  } catch (error) {
    res.json({ err: error.message });
  }
});

// creating new Product in the wishlist
wishlistRouter.post("/create", async (req, res) => {
  const { brand, name, price, mrp, image1, image2, image3, rating, email } =
    req.body;
  try {
    const product = new WishlistModel({
      brand,
      name,
      price,
      mrp,
      image1,
      image2,
      image3,
      rating,
      email,
    });
    await product.save();
    res.json({
      mas: "New product has been added in the wishlist",
      product: {
        brand,
        name,
        price,
        mrp,
        image1,
        image2,
        image3,
        rating,
        email,
      },
    });
  } catch (error) {
    res.json({ err: error.message });
  }
});

// deleting product from wishlist with id accepts id as a param
wishlistRouter.delete("/delete/:productID", async (req, res) => {
  const { productID } = req.params;
  const product = await WishlistModel.findOne({ _id: productID });
  try {
    await WishlistModel.findByIdAndDelete({ _id: productID });
    res.json({ msg: `${product.name} has been deleted from wishlist` });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = {
  wishlistRouter,
};
