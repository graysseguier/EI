const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  filmsLiked: { type: Array},
});

const UserModel = mongoose.model("UserModel", UserSchema, "users");

module.exports = UserModel;
