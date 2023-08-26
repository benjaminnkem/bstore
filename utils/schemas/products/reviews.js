import { Schema, model, models } from "mongoose";

const reviewSchema = new Schema({
  fullName: {
    type: String,
    required: true,
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
    maxLength: 2048,
    trim: true,
  },
  stars: {
    type: Number,
    required: true,
    max: 5,
  },
  date_created: {
    type: Date,
    default: () => new Date(),
  },
});

export default models?.Reviews || model("Reviews", reviewSchema);
