import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
  role: { type: String, default: "user" },
  email: {
    type: String,
    lowercase: true,
  },
});

export default models.Users || mongoose.model("Users", userSchema);