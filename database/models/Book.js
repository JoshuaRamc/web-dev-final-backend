const Sequelize = require("sequelize");

const db = require("../db");

const Book = db.define("book", {
  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
  },
  authors: {
    type: Sequelize.STRING,
  },
  publication_date: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  page_count: {
    type: Sequelize.INTEGER,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

module.exports = Book;
