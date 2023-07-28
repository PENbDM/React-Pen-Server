import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter correct title"],
    },
    price: {
      type: Number,
      required: [true, "Please enter correct price"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please enter correct url"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Item", ItemSchema);
