import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: [true, 'Item name is required'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required'],
  },
},
{
  timestamps: true,
});

const Item = model('Item', itemSchema);

export default Item;
