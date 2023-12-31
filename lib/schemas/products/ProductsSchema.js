import mongoose, { Schema, Types } from "mongoose";

const productsSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  is_available: {
    type: Boolean,
    default: true,
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  comments: [String],
  rating: {
    type: [Types.ObjectId],
    default: [],
  },
  seller_id: Schema.Types.ObjectId,
  date_posted: { type: Date, default: () => new Date() },
});

export default mongoose.models?.Products || mongoose.model("Products", productsSchema);
