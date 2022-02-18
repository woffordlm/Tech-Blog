const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbdata) => res.json(dbdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router