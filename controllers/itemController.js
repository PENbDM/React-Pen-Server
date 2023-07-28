import Items from "../models/Items.js";
import cartItems from "../models/cartItems.js";
import favItems from "../models/favItems.js";

const getItems = async (req, res) => {
  try {
    const item = await Items.find({});
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const postCartItems = async (req, res) => {
  try {
    const cartItem = await cartItems.create(req.body);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCartItems = async (req, res) => {
  try {
    const cartItem = await cartItems.find({});
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletCard = await cartItems.findByIdAndRemove(id);
    res.status(200).json(deletCard);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
};
const deleteCartAll = async (req, res) => {
  // const { cart } = req.params;
  try {
    const delCartAll = await cartItems.deleteMany({});
    res.status(200).json(delCartAll);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
};
const postFav = async (req, res) => {
  try {
    const favItem = await favItems.create(req.body);
    res.status(200).json(favItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getFav = async (req, res) => {
  try {
    const favItem = await favItems.find({});
    res.status(200).json(favItem);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const deletFav = await favItems.findByIdAndRemove(id);
    res.status(200).json(deletFav);
  } catch (error) {
    res.status(500).then({ message: error.message });
  }
};

export {
  getItems,
  postCartItems,
  getCartItems,
  deleteCartItem,
  postFav,
  getFav,
  deleteFav,
  deleteCartAll,
};
