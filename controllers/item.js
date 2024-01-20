import Item from "../models/item.js";
import User from "../models/user.js"

export const createItem = async (req, res) => {
  try {
    const { itemName, price } = req.body;
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({
        message: `User with ${userId} not found`,
      });
    }

    const newItem = new Item({
      itemName,
      price,
      user:user._id,
    });

    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Item created successfully",
      data: savedItem,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getUserItems = async (req, res) => {
 try {

  const userId = req.params.userId;
  const items = await Item.findOne({user:userId});

  if (!items) {
      res.status(404).json({
          message: `No items found`
      })
  }

  res.status(200).json({
      message: `Items purchased by user with ${userId}`,
      data: items
  })
  
 } catch (err) {
  return res.status(500).json({
    message:err.message
  })
 }
};