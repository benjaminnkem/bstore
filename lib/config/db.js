import mongoose from "mongoose";
const connectToDB = () =>
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  });
export default connectToDB;
