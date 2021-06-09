const express = require("express");
const MovieModel = require("../models/movies");
const router = express.Router();

router.get("/", function (req, res) {
  MovieModel.find({}).then(function (movies) {
    res.json({ users: movies });
  });
});

router.post("/new", function (req, res) {
  const newMovie = new MovieModel({
    title: req.body.title,
    date: req.body.date,
  });
  console.log(req.body);
  newMovie
    .save()
    .then(function (newDocument) {
      res.status(201).json(newDocument);
    })
    .catch(function (error) {
      if (error.code === 11000) {
        res.status(400).json({
          message: `Movie with the title "${newMovie.title}" already exists`,
        });
      } else {
        res.status(500).json({ message: "Error while adding the movie" });
      }
    });
});
router.post("/del", function (req, res) {
  MovieModel.findByIdAndRemove(req.body.Id).then(function () {
    res.json({ message: "the movie has been deleted from our database" });
  });
});

module.exports = router;
