import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import CommentsProvider from "./context/CommentsContext";

function App() {
  return (
    <Router>
      <CommentsProvider>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </CommentsProvider>
    </Router>
  );
}
export default App;
