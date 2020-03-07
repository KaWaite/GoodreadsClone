let Author = require("../models/author.model");

module.exports = {
  // get all authors
  index: (req, res) => {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // get single author
  single: (req, res) => {
    Author.findById(req.params.id)
      .then(author => res.json(author))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // Delete an author
  delete: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then(() => res.json("Author deleted"))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // Create new author
  create: (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const books = req.body.books;

    const newauthor = new Author({
      name,
      age,
      books
    });

    newauthor
      .save()
      .then(() => res.json("Author Added!"))
      .catch(err => res.status(400).json("Error: " + err));
  },
  // update author
  update: (req, res) => {
    Author.findById(req.params.id)
      .then(author => {
        (author.name = req.body.name),
          (author.age = Number(req.body.age)),
          (author.books = req.body.books);

        author
          .save()
          .then(() => res.json("Author Updated!"))
          .catch(err => res.status(400).json("Error: " + err));
      })
      .catch(err => res.status(400).json("Error: " + err));
  }
};
