import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: false, trim: true, lowercase: true },
  role: { type: String, required: true, default: "user" },
  date_joined: { type: Date, required: false, default: () => new Date() },
});

export default models.Users || mongoose.model("Users", userSchema);
