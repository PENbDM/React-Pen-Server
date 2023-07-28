import order from "../models/order.js";

const CreateOrder = async (req, res) => {
  //  const { title, price, imageUrl } = req.body;
  try {
    // const user_id = req.user._id;
    // for (let i = 0; i <= req.body.length; i++) {
    //   req.body[i].user_id = user_id;
    // }
    const orderItem = await order.create(req.body);
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetOrder = async (req, res) => {
  try {
    const item = await order.find({});
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { CreateOrder, GetOrder };
