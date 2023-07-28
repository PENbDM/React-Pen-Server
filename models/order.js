import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  // {
  //   orderNumber: {
  //     type: Number,
  //     required: [true],
  //   },
  // },
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
    amount: {
      type: Number,
    },
    // user_id: {
    //   type: String,
    //   required: [true],
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
