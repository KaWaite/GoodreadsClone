const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const booksRouter = require("./routes/books");
const userRouter = require("./routes/userinfo");
const authorRouter = require("./routes/authors");

app.use("/books", booksRouter);
app.use("/user", userRouter);
app.use("/authors", authorRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
