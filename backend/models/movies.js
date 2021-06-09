const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  date: { type: String },
});

const movieModel = mongoose.model("movieModel", MovieSchema, "movies");

module.exports = movieModel;
