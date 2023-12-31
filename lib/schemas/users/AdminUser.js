import mongoose from "mongoose";

const adminUsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: false, trim: true, lowercase: true },
  role: { type: String, default: "admin" },
  date_joined: { type: Date, required: false, default: () => new Date() },
});

export default mongoose.models.AdminUsers || mongoose.model("AdminUsers", adminUsersSchema);
