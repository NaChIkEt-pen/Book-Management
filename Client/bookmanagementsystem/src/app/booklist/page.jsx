import React from "react";
import BookList from "../components/Booklist/BookList";
import NavBar from "../components/NavBar";

const BookListPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <NavBar />
      <BookList />
      <footer className="mt-16"></footer>
    </div>
  );
};

export default BookListPage;
