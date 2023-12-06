const express = require("express");
const router = express.Router();
const db = require("../database/db");
const Book = require("../database/models/Book");
const bookService = require("../service/book");

// retrieves book list
router.get("/findall", async (req, res) => {
  Book.findAll()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => console.log(err));
});

// add book to database
router.post("/createbook", function (req, res, next) {
  Book.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((err) => next(err));
});

// get book by id
router.get("/:id", async (req, res) => {
  Book.findByPk(req.params.id)
    .then((query_book) => res.status(200).json(query_book))
    .catch((err) => console.log(err));
});

// delete book by id
router.delete("/:id", function (req, res, next) {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(200).json("Deleted book."))
    .catch((err) => next(err));
});

// update
router.put("/:id", async (req, res) => {
  await Book.update(req.body, { where: { id: req.params.id } });
  let book = await Book.findByPk(req.params.id);
  res.status(200).json(book);
});
module.exports = router;
