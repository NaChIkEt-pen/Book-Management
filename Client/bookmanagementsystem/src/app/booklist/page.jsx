import React from "react";
import BookList from "../components/Booklist/BookList";

const BookListPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">Books</h1>
      <BookList />
    </div>
  );
};

export default BookListPage;
