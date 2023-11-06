const Book = require("../models/book");

const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const getBook = (req, res) => {
  const { idBook } = req.params;
  Book.findById(idBook)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const createBook = (req, res) => {
  const data = req.body;
  Book.create(data)
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const updateBook = (req, res) => {
  const { idBook } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(idBook, data, { new: true, runValidators: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const deleteBook = (req, res) => {
  const { idBook } = req.params;
  Book.findByIdAndDelete(idBook)
    .then((book) => {
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
