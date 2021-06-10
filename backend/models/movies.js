const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  date: { type: String },
  genre_ids: { type: Array },
  vote_average: { type: Number },
  adult: { type: Boolean },
  original_language: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
});

const movieModel = mongoose.model("movieModel", MovieSchema, "movies");

module.exports = movieModel;
