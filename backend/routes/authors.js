const router = require("express").Router();
const AuthorsController = require("../controllers/authors.controller");

// Get all authors
router.route("/").get(AuthorsController.index);

// Get single author
router
  .route("/:id")
  .get(AuthorsController.single)
  // Delete Author
  .delete(AuthorsController.delete);

// Add new author to database
router.route("/newauthor").post(AuthorsController.create);

// Update Author info
router.route("/update/:id").post(AuthorsController.update);

module.exports = router;
