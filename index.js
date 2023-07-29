import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Items from "./models/Items.js";
import cartItems from "./models/cartItems.js";
import favItems from "./models/favItems.js";
import userRoutes from "./routes/user.js";
import itemRoutes from "./routes/item.js";
import orderRoutes from "./routes/order.js";
import order from "./models/order.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log("DB Error", err));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/user", userRoutes);
app.use("/api/", itemRoutes);
app.use("/api/", orderRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server started on PORT");
});
