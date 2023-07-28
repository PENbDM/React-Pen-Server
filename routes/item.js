import express from "express";
const router = express.Router();
import {
  getItems,
  postCartItems,
  getCartItems,
  deleteCartItem,
  postFav,
  getFav,
  deleteFav,
  deleteCartAll,
} from "../controllers/itemController.js";
// import requireAuth from "../middleware/requireAuth.js";
// router.use(requireAuth);
//item route
router.get("/item", getItems);
//cart route
router.get("/getcartItems", getCartItems);
router.post("/cartItem", postCartItems);
router.delete("/delete/:id", deleteCartItem);
router.delete("/deleteAll", deleteCartAll);
//fav route
router.get("/getfavItem", getFav);
router.post("/favItem", postFav);
router.delete("/deletee/:id", deleteFav);

export default router;
