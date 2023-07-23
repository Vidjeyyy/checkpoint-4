import axios from "axios";

export async function getComments() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/chat/`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createComment(formData) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/chat/create`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteComment(commentId) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/chat/delete/${commentId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateComment(commentId, formData) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/comments/update/${commentId}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
