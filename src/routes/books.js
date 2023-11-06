const router = require("express").Router();

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:idBook", getBook);
router.post("/books", createBook);
router.patch("/books/:idBook", updateBook);
router.delete("/books/:idBook", deleteBook);

module.exports = router;
