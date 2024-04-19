import React, { useState } from "react";
import ReactDOM from "react-dom";

const BookmarkModal = ({ isOpen, onClose, bookmark }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <h2>Hello</h2>,
    document.getElementById("modal-root")
  );
};

export default BookmarkModal;
