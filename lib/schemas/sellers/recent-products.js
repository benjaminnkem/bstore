import mongoose, { Schema } from "mongoose";

const recentProductsSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.GetRecentProducts || mongoose.model("GetRecentProducts", recentProductsSchema);
