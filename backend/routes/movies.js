const express = require("express");
const MovieModel = require("../models/movies");
const router = express.Router();

router.get("/", function (req, res) {
  MovieModel.find({}).then(function (movies) {
    res.json({ movies: movies });
  });
});
router.get("/test", function (req, res) {
  res.json({ title: req.body.title, date: req.body.date });
});
router.post("/new", function (req, res) {
  console.log(req.body);
  const newMovie = new MovieModel({
    title: req.body.title,
    date: req.body.date,
    genre_ids: req.body.genre_ids,
    adult: req.body.adult,
    vote_average: req.body.vote_average,
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
        console.log(error);
        res.status(500).json({ message: "Error while adding the movie" });
      }
    });
});
router.post("/del", function (req, res) {
  MovieModel.findByIdAndRemove(req.body.Id).then(function () {
    res.json({ message: "the movie has been deleted from our database" });
  });
});

router.get("/filter", function (req, res) {
  console.log(req.query);
  MovieModel.find(req.query).then(function (movies) {
    res.json(movies);
  });
});

router.get("/sortby", function (req, res) {
  console.log(req.query);
  MovieModel.find({}).then(function (movies) {
    res.json(movies);
  });
});

module.exports = router;
