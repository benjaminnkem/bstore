import { Schema, Types, model, models } from "mongoose";

const reviewSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    maxLength: 1024,
    trim: true,
  },
  stars: {
    type: Number,
    required: true,
    max: 5,
  },
  productId: {
    type: Types.ObjectId,
    required: true,
  },
  date_created: {
    type: Date,
    default: () => new Date(),
  },
});

export default models?.Reviews || model("Reviews", reviewSchema);
