import { useState } from "react";

import "./App.css";
import Modal from "./pages/BookmarkModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookmark, setBookmark] = useState(null);

  const openModal = (bookmark) => {
    setModalOpen(true);
    setBookmark(bookmark);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBookmark(null);
  };

  const handleBookmark = (bookmark) => {
    alert("Add Bookmark");
    closeModal();
  };
  return (
    <>
      <h3>Bookmark Website</h3>
      <button onClick={() => openModal(null)}>Add Bookmark</button>

      <Modal isOpen={openModal} onClose={closeModal} />
    </>
  );
}

export default App;
