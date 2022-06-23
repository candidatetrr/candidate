const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
      },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

Product = mongoose.model("User", UserSchema);

module.exports = Product;