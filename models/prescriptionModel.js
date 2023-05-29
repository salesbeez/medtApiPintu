const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  clientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: true,
  },
  prescriptionImage: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prescription", prescriptionSchema);
