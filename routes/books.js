const express = require('express');
const router = express.Router();
const db = require('../database/db');
const Book = require('../database/models/Book');


router.get('/', (req,res) =>{
    res.json({
        status: "success",
        book: "get",
    })
} );


module.exports = router;