import jwt from "jsonwebtoken";
import User from "../models/user.js";
const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "authorization token required" });
  }
  const token = authorization.split(" ")[1];
  //   here we making split from authorization, we need to grab token
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    // select (_id), its important, its return only id, insted of full property of user from db
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

export default requireAuth;
