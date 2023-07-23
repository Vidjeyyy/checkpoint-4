import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  getComments,
  createComment,
  deleteComment,
} from "../services/commentsService";

export const CommentsContext = createContext();

export default function CommentsProvider({ children }) {
  const [commentsData, setCommentsData] = useState();
  const [deleteComments, setDeleteComment] = useState();
  const [postComment, setPostComment] = useState();

  async function loadComments() {
    const data = await getComments();
    setCommentsData(data);
  }

  async function deleteCommentary(id) {
    const data = await deleteComment(id);
    setDeleteComment(data);
  }

  async function newComment(post) {
    const data = await createComment(post);
    setPostComment(data);
  }

  useEffect(() => {
    loadComments();
  }, []);

  const value = useMemo(
    () => ({
      commentsData,
      deleteComments,
      postComment,
      loadComments,
      deleteCommentary,
      newComment,
    }),
    [commentsData]
  );

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}

CommentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
