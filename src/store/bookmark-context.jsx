import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BookmarkContext = createContext({
  items: [],
  addBookmark: (bookmark) => {},
  removeBookmark: (bookmark) => {},
  editBookmark: (bookmark) => {},
});

const URL = "https://crudcrud.com/api/0f187ac6335f4da0b97c1dc166abfc73";

export const BookmarkContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const fetchBookmark = async () => {
    try {
      const response = await axios.get(`${URL}/bookmark`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addBookmarkHandler = async (bookmark) => {
    try {
      //   alert("add");
      console.log(bookmark);

      const obj = {
        title: bookmark.title,
        url: bookmark.url,
      };

      const response = await axios.post(`${URL}/bookmark`, obj);
      if (response.status === 201) {
        alert("Bookmark Added Succesfully");
        fetchBookmark();
      } else {
        alert("Bookmark Not Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeBookmarkHandler = async (bookmark) => {
    try {
      //   console.log(bookmark);
      //   alert("delete");

      const _id = bookmark._id;

      const response = await axios.delete(`${URL}/bookmark/${_id}`);
      if (response) {
        alert("Bookmark Deleted Succesfully");
        fetchBookmark();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editBookmarkHandler = async (bookmark) => {
    try {
      //alert("edit");
      //console.log(bookmark);
      const _id = bookmark._id;
      const obj = {
        title: bookmark.title,
        url: bookmark.url,
      };
      const response = await axios.put(`${URL}/bookmark/${_id}`, obj);
      if (response) {
        alert("Bookmark Updated Succesfully");
        fetchBookmark();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const bookContext = {
    items: items,
    addBookmark: addBookmarkHandler,
    removeBookmark: removeBookmarkHandler,
    editBookmark: editBookmarkHandler,
  };

  useEffect(() => {
    console.log("bookmark_context:", items);
  }, [items]);

  useEffect(() => {
    fetchBookmark();
  }, []);

  return (
    <BookmarkContext.Provider value={bookContext}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
