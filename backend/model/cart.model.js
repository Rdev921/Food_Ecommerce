const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    userID: String,
    username: String,
    brand: String,
    name: String,
    price: Number,
    mrp: Number,
    image1: String,
    image2: String,
    image3: String,
    rating: Number,
    category: String,
    quantity: Number,
    description: String,
    instock: Number,
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
