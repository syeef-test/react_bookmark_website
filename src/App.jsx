import { useState } from "react";

import "./App.css";
import AddBookmark from "./pages/AddBookmark";
import BookmarkList from "./pages/BookmarkList";

function App() {
  return (
    <>
      <h3>Bookmark Website</h3>
      <AddBookmark />
      <BookmarkList />
    </>
  );
}

export default App;
