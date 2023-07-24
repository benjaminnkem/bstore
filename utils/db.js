import mongoose from "mongoose";
const connectToDB = () => mongoose.connect(process.env.MONGODB_URI);
export default connectToDB;
