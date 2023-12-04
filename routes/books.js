const express = require("express");
const router = express.Router();
const db = require("../database/db");
const Book = require("../database/models/Book");


//retrieves book list
router.get("/", async (req, res) => {
  Book.findAll()
    .then((books) => {
      console.log(books);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

// Add book to database


module.exports = router;
