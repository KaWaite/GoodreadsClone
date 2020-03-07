const Book = require("./book.model");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: Book }]
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
