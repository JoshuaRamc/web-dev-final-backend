const BookModel = require("../database/models/Book");


async function create(attributes) {
    const newBook = await BookModel.create(attributes);
    return newBook;
}