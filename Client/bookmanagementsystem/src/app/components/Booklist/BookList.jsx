import React from "react";
import DeleteBookButton from "./DeleteBookButton";
import { getAllBooks, deleteBook } from "../../actions/book";

const BookList = async () => {
  const res = await getAllBooks();

  const books = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Book List</h1>
      {/* Tailwind grid setup */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="border p-4 rounded-lg shadow-md bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{book.bookName}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <DeleteBookButton bookId={book.bookId} />
            {/* This button will handle deletion on the Client Side */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
