import express from "express";
const router = express.Router();
import { CreateOrder, GetOrder } from "../controllers/orderController.js";
import requireAuth from "../middleware/requireAuth.js";

router.use(requireAuth);
// fire this middleware function before which is below
// we want to protect all this router, only auth user can do it
//CREATE ORDER
router.post("/setOrder", CreateOrder);
//GET ORDER
router.get("/getOrder", GetOrder);

export default router;
