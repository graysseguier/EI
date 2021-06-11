const express = require("express");
const UserModel = require("../models/user");
const router = express.Router();

router.get("/", function (req, res) {
  UserModel.find({}).then(function (users) {
    res.json({ users: users });
  });
});

router.post("/new", function (req, res) {
  const newUser = new UserModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    filmsLiked: req.body.filmsLiked,
  });
  console.log(req.body);
  newUser
    .save()
    .then(function (newDocument) {
      res.status(201).json(newDocument);
    })
    .catch(function (error) {
      if (error.code === 11000) {
        res.status(400).json({
          message: `User with email "${newUser.email}" already exists`,
        });
      } else {
        res.status(500).json({ message: "Error while creating the user" });
        console.log(error);
      }
    });
});

router.put("/like", function (req, res) {
  console.log(req.body);
  UserModel.findOne({ email: req.body.email }).then(function (user) {
    console.log(user);
    if (user == null) {
      res.status(404).json("User not found");
      return;
    }
    user.update({ $addToSet: { filmsLiked: [req.body.movie_id] } }).then(() => {
      res.json({ status: "ok" });
    });
  });
});

router.put("/dislike", function (req, res) {
  console.log(req.body);
  UserModel.findOne({ email: req.body.email }).then(function (user) {
    console.log(user);
    if (user == null) {
      res.status(404).json("User not found");
      return;
    }
    user.update({ $pull: { filmsLiked: req.body.movie_id } }).then(() => {
      res.json({ status: "ok" });
    });
  });
});

router.get("/email", function (req, res) {
  UserModel.find({ email: req.body.email }).then(function (users) {
    console.log(req.body);
    res.json({ users: users });
  });
});

module.exports = router;
