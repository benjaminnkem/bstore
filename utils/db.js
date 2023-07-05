import mongoose from "mongoose";
const connectToDb = () => mongoose.connect("mongodb://localhost:27017/test");
export default connectToDb;
