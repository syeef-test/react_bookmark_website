import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import BookmarkContext from "../store/bookmark-context";

const BookmarkModal = ({ isOpen, onClose, bookmark }) => {
  const [formData, setFormData] = useState({
    title: bookmark ? bookmark.title : "",
    url: bookmark ? bookmark.url : "",
  });

  //reflect current change in bookmark
  useEffect(() => {
    setFormData({
      title: bookmark ? bookmark.title : "",
      url: bookmark ? bookmark.url : "",
    });
  }, [bookmark]);

  const bookmarkContext = useContext(BookmarkContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    const newBookmark = { ...bookmark, ...formData };
    if (bookmark) {
      bookmarkContext.editBookmark(newBookmark);
    } else {
      bookmarkContext.addBookmark(newBookmark);
    }

    onClose();
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>{bookmark ? "Edit Bookmark" : "Add Bookmark"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>URL:</label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{bookmark ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default BookmarkModal;
