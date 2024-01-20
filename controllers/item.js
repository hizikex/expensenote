import mongoose from 'mongoose';
import Item from '../models/item.js';

export const createItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const Item = await Item.findOne({})
      }
  } catch (err) {
    res.status(401).json({
      message: err.message
    })
  }
}