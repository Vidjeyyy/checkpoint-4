import React, { useContext, useState } from "react";
import { CommentsContext } from "../../context/CommentsContext";
import "./BarreDeChat.scss";

export default function BarreDeChat() {
  const { newComment } = useContext(CommentsContext);
  const [content, setContent] = useState(""); // État pour contenir le contenu du commentaire

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Vérifier si le contenu du commentaire n'est pas vide avant de poster
    if (content.trim() !== "") {
      // Appeler la fonction postComment avec le contenu du commentaire
      newComment({ content });
      // Réinitialiser le contenu du formulaire après l'envoi
      setContent("");

      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="barre"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Écrivez votre commentaire..."
        />
        <button type="submit" className="button">
          Envoyer
        </button>
      </form>
    </div>
  );
}
