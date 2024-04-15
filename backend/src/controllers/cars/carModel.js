import mongoose from "mongoose";

const stringAndRequired = {
  type: String,
  required: true,
};

const numberAndRequired = {
  type: Number,
  required: true,
};

const carSchema = new mongoose.Schema({
  email: stringAndRequired,
  imageBase64: stringAndRequired,
  make: stringAndRequired,
  model: stringAndRequired,
  year: numberAndRequired,
  engineSize: numberAndRequired,
  bhp: numberAndRequired,
  doors: numberAndRequired,
  mileage: numberAndRequired,
  ownerAmount: numberAndRequired,
  price: numberAndRequired,
});

export default mongoose.model("car", carSchema);
