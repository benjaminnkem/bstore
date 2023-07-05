import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    lowercase: true,
  },
});

const User = mongoose.model("Users", userSchema);
export default User;
