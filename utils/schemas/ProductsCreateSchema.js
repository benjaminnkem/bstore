import { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  seller_id: Schema.Types.ObjectId,
  category: { type: String, required: true },
  is_available: { type: Boolean, default: true },
  images: { type: [String], required: true },
  description: { type: String, required: true, trim: true },
  comments: [String],
  rating: [Number],
  date_posted: { type: Date, default: () => new Date() },
});

export default model("Products", productsSchema);
