import mongoose, { Schema, models } from "mongoose";

const recentPostSchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  date_posted: { type: Date, default: () => new Date() },
});

export default models?.RecentPosts || mongoose.model("RecentPosts", recentPostSchema);
