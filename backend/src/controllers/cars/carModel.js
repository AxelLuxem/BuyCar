import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
});

export default mongoose.model("car", carSchema);
