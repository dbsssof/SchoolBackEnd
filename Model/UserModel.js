// customerModel.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String,unique: true, required: true,
  },
  pass: { type: String,unique: true, required: true,},
  expired: { type: Date,required:true },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
