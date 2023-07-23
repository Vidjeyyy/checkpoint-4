import React, { useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import "./Message.scss";

export default function Message() {
  const { commentsData, deleteCommentary } = useContext(CommentsContext);

  const handleDeleteComment = (commentId) => {
    deleteCommentary(commentId);
    window.location.reload();
    // Vous pouvez appeler une fonction de mise à jour des commentaires ici au lieu de recharger la page
  };

  return (
    <div>
      <div>
        {commentsData &&
          commentsData.map((comment) => (
            <div
              key={comment.id}
              className={comment.id % 2 === 0 ? "mesmessages" : "sesmessages"}
            >
              {/* Afficher les détails du commentaire avec ID pair ou impair */}
              <p>{comment.content}</p>{" "}
              <button
                className="but"
                type="button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
