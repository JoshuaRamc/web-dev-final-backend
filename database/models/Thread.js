
const Sequelize = require("sequelize");

const db = require("../db");

//id BIGSERIAL NOT NULL PRIMARY KEY

const Thread = db.define("thread", {
  isbn_num: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
    foreignKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  review: {
    type: Sequelize.STRING,
    required: true,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Thread;
