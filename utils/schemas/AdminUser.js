import mongoose from "mongoose";

const adminUsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: false, trim: true, lowercase: true },
  date_joined: { type: Date, required: false },
});

export default mongoose.models.AdminUsers || mongoose.model("AdminUsers", adminUsersSchema);
