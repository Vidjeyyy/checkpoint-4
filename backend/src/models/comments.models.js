/* eslint-disable camelcase */
const connection = require("../services/db");

const getAllComments = async () => {
  try {
    // Exécuter la requête SQL en utilisant la connexion à la base de données
    const [response] = await connection
      .promise()
      .query("SELECT * FROM comments");
    return response;
  } catch (error) {
    throw new Error("Failed to get all Comments");
  }
};

const addComment = async (comment) => {
  const { content } = comment;
  try {
    const insertResult = await connection
      .promise()
      .query("INSERT INTO comments (content) VALUES (?)", [content]);
    if (insertResult.affectedRows === 1) {
      console.info("Comment inserted:", insertResult);
      return { ...comment, id: insertResult.insertId };
    }
    throw new Error("Failed to insert Comment");
  } catch (error) {
    console.error("Error in addComment:", error);
    throw error;
  }
};

const updateComment = async (comment, id) => {
  const { content } = comment;
  try {
    const sql = "UPDATE comments SET content = ? WHERE id = ?";

    const response = await connection.promise().query(sql, [content, id]);

    if (response[0].affectedRows === 1) {
      return content;
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to UPDATE Comment");
  }
};

const deleteComment = async (id) => {
  try {
    const [response] = await connection
      .promise()
      .query("DELETE FROM comments WHERE id = ?", id);
    if (response.affectedRows === 1) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Failed to DELETE Comment");
  }
};

module.exports = {
  getAllComments,

  addComment,
  updateComment,
  deleteComment,
};
