import { useState, useContext } from "react";

import "./App.css";
import Modal from "./pages/BookmarkModal";
import BookmarkContext from "./store/bookmark-context";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookmark, setBookmark] = useState(null);

  const bookmarkContext = useContext(BookmarkContext);

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

  const handleDelete = (bookmark) => {
    // alert("Delete Bookmark");
    bookmarkContext.removeBookmark(bookmark);
  };
  return (
    <>
      <h3>Bookmark Website</h3>
      <button onClick={() => openModal(null)}>Add Bookmark</button>
      {bookmarkContext.items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <a href={item.url}>{item.url}</a>
          <button onClick={() => openModal(item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
