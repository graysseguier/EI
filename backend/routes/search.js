const express = require("express");

const MovieModel = require("../models/movies");
const router = express.Router();

router.get("/", function (req, res) {
  MovieModel.find({ title: req.query.search }).then(function (movies) {
    res.json({ movies: movies });
  });
});
