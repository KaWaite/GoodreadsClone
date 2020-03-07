const Author = require("./author.model");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: Author }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
