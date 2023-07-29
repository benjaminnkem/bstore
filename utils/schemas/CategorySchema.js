import mongoose, { Schema, models } from "mongoose";

const categoryScheme = new Schema({
  name: { type: String, required: true, trim: true, minLength: 2 },
  creator_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
  date_created: { type: Date, required: true, default: () => new Date() },
});

export default models.Categories || mongoose.model("Categories", categoryScheme);
