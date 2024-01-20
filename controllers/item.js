import Item from "../models/item.js";

export const createItem = async (req, res) => {
  try {
    const { itemName, price } = req.body;
    const userId = req.params.userId;
    const user = await Item.findOne({ userId });

    if (!user) {
      res.status(404).json({
        message: `User with ${userId} not found`,
      });
    }

    const newItem = new Item({
      itemName,
      price,
      user: userId,
    });

    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Item created successfully",
      data: savedItem,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

export const getUserItems = async (req, res) => {
    const userId = req.params.userId;
    const items = await Item.find(userId);

    if (!items) {
        res.status(404).json({
            message: `No items found`
        })
    }

    res.status(200).json({
        message: `Items purchased by user with ${userId}`,
        data: items
    })
};