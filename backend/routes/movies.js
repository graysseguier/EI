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
  const mongoQuery = {};
  if (req.query.original_language) {
    mongoQuery.original_language = req.query.original_language;
  }
  if (req.query.genre_ids) {
    mongoQuery.genre_ids = parseInt(req.query.genre_ids);
  }
  if (req.query.date) {
    console.log((parseInt(req.query.date) + 1).toString());
    mongoQuery.release_date = {
      $gte: new Date(req.query.date).toISOString(),
      $lt: new Date((parseInt(req.query.date) + 1).toString()).toISOString(),
    };
  }
  if (req.query.release_date) {
    console.log("hello");
    return MovieModel.find({})
      .sort({ release_date: -1 })
      .then(function (movies) {
        res.json(movies);
      });
  }
  if (req.query.popularity) {
    return MovieModel.find({})
      .sort({ popularity: -1 })
      .then(function (movies) {
        res.json(movies);
      });
  }
  if (req.query.title) {
    return MovieModel.find({})
      .sort({ title: 1 })
      .then(function (movies) {
        res.json(movies);
      });
  }
  if (req.query.vote_average) {
    return MovieModel.find({})
      .sort({ vote_average: -1 })
      .then(function (movies) {
        res.json(movies);
      });
  }

  console.log(mongoQuery);

  return MovieModel.find(mongoQuery)
    .sort({ popularity: -1 })
    .then(function (movies) {
      res.json(movies);
    });
});

router.post("/id", function (req, res) {
  MovieModel.findOne({ id: req.body.id }).then(function (movie) {
    console.log(req.body);
    res.json(movie);
  });
});

module.exports = router;
