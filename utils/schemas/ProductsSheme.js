import mongoose, { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  is_available: Boolean,
  images: { type: [String], required: true },
  description: { type: String, required: true, trim: true },
  seller_id: mongoose.SchemaTypes.ObjectId,
  date_posted: Date,
});

export default models.Products || model("Products", productsSchema);
