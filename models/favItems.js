import mongoose from "mongoose";

const favSchema = new mongoose.Schema(
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

export default mongoose.model("favItems", favSchema);
