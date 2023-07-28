import mongoose from "mongoose";

const cartItemsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    price: {
      type: Number,
      required: [true],
    },
    imageUrl: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cartItems", cartItemsSchema);
