import React, { useState } from "react";
import ReactDOM from "react-dom";

const BookmarkModal = ({ isOpen, onClose, bookmark }) => {
  const [formData, setFormData] = useState({
    title: bookmark ? bookmark.title : "",
    url: bookmark ? bookmark.url : "",
  });

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
