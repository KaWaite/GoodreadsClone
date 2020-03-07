const router = require("express").Router();
const BooksController = require("../controllers/books.controller");

// Get all books route
router.route("/").get(BooksController.index);

// Get a single book route(for now by ID. maybe should be by name...)
router
  .route("/:id")
  .get(BooksController.single)
  // Delete a single book
  .delete(BooksController.delete);

// Add a book route
router.route("/add").post(BooksController.create);

// Eventually UPDATE route(to complete CRUD)

module.exports = router;
