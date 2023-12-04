const Sequelize = require("sequelize");

const db = require("../db");

const Book = db.define("book", {
  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  page_count: {
    type: Sequelize.INTEGER,
  },
  publication_date: {
    type: Sequelize.STRING,
  },
});

module.exports = Book;
