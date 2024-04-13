import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  material: { type: String },
  unit: { type: String },
  thickness: { type: Number },
});

export const Product = mongoose.model('Product', ProductSchema);
