const express = require("express");
const router = express.Router();
const db = require("../database/db");
const Thread = require("../database/models/Thread");

router.get("/findthreads", async (req, res) => {
  Thread.findAll()
    .then((threads) => {
      res.send(threads);
    })
    .catch((err) => console.log(err));
});

router.post("/create", function (req, res, next) {
  Thread.create(req.body)
    .then((createdThread) => res.status(200).json(createdThread))
    .catch((err) => next(err));
});

router.get("/:id", async (req, res) => {
  Thread.findByPk(req.params.id)
    .then((query_thread) => res.status(200).json(query_thread))
    .catch((err) => console.log(err));
});

router.get("/isbn/:isbn", async (req, res) => {
  try {
    Thread.findAll({
      where: {
        isbn_num: req.params.isbn,
      },
    })
      .then((query_thread) => res.status(200).json(query_thread))
      .catch((err) => next(err));
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", function (req, res, next) {
  Thread.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(200).json("Deleted thread."))
    .catch((err) => next(err));
});

router.put("/:id", async (req, res) => {
  await Thread.update(req.body, { where: { id: req.params.id } });
  let thread = await Thread.findByPk(req.params.id);
  res.status(200).json(thread);
});

module.exports = router;
