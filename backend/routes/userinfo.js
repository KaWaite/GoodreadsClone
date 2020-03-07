const router = require("express").Router();
let User = require("../models/user.model");

// Get User Info
router.route("/:id").get((req, res) => {
  User.findById(req.params.id).then(user => res.json(user));
});

// Create User
router.route("/newuser").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const age = Number(req.body.age);
  const email = req.body.email;

  const newuser = new User({
    firstname,
    lastname,
    age,
    email
  });

  newuser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Delete User

// Update User Info

module.exports = router;
