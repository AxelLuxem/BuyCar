import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  image: {
    required: true,
    type: String,
  },
});

export default mongoose.model("car", carSchema);
