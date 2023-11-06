require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const notFoundRouter = require("./routes/notFound");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);
app.use(notFoundRouter);

const { PORT = 3000, API_URL = "http://127.0.0.1", MONGO_URL } = process.env;

mongoose.connect(MONGO_URL);

app.use(cors());

app.listen(PORT, () => {
  console.log(`сервер запущен по адресу ${API_URL}:${PORT}`);
});
