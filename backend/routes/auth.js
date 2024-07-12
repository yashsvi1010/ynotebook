const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a User using: POST "/api/auth/". Dosen't require auth
router.post(
  "/",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then((user) => res.json(user));
  }
);
module.exports = router;
