let Book = require("../models/book.model");

module.exports = {
  // get all books
  index: (req, res) => {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // get single book
  single: (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // delete book
  delete: (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json("Book deleted"))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // create book
  create: (req, res) => {
    const title = req.body.title;
    const author = req.body.author;

    const newbook = new Book({
      title,
      author
    });

    newbook
      .save()
      .then(() => res.json("Book Added!"))
      .catch(err => res.status(400).json("Error: " + err));
  }
};
