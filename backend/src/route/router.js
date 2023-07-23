const express = require("express");

const router = express.Router();

// Controllers
const {
  GetComments,

  AddComment,
  UpdateComment,
  DeleteComment,
} = require("../controllers/comments.controllers");

// Publics Routes
router.get("/", GetComments);
router.post("/create", AddComment);
router.put("/update/:id", UpdateComment);
router.delete("/delete/:id", DeleteComment);

// Private routes

module.exports = router;
