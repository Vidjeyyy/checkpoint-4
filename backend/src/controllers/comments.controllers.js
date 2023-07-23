const {
  getAllComments,
  addComment,
  updateComment,
  deleteComment,
} = require("../models/comments.models");

const GetComments = async (req, res) => {
  try {
    const response = await getAllComments();
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).message("no Comments found");
    }
  } catch (error) {
    res.status(500).send("All Comments not found");
  }
};

const AddComment = async (req, res) => {
  try {
    const response = await addComment(req.body);
    res.status(201).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await updateComment(req.body, id);
    if (response) {
      res.status(200).send({ message: "Comment updated" });
    } else {
      res.status(404).send({ message: "User is voted" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const CommentId = req.params.id;
    await deleteComment(CommentId);
    res.json({ message: "User DELETE on Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetComments,
  AddComment,
  UpdateComment,
  DeleteComment,
};
