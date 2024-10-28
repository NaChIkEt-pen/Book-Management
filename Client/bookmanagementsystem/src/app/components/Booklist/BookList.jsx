import React from "react";
import DeleteBookButton from "./DeleteBookButton";
import { getAllBooks } from "../../actions/book";

const BookList = async () => {
  try {
    const books = await getAllBooks();

    return (
      <div className="container p-0 sm:p-6 flex flex-col items-center">
        <h1 className="text-3xl text-center text-gray-700 font-bold my-10">
          Book List
        </h1>
        {/* Tailwind grid setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-12">
          {books.map((book) => (
            <div
              key={book.bookId}
              className="card bg-white border border-gray-200 p-4 rounded-lg shadow-xl shadow-gray-600 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="card-body items-center p-0">
                <h2 className="card-title text-gray-700">{book.bookName}</h2>
                <h3 className="card-title text-gray-600 text-sm">
                  Author: {book.author}
                </h3>
              </div>
              <figure className="my-2">
                <img
                  className="h-56 rounded-md"
                  src={book.coverImageUrl}
                  alt={`${book.bookName} cover`}
                />
              </figure>
              <div className="card-actions justify-center">
                <DeleteBookButton bookId={book.bookId} />
                {/* This button will handle deletion on the Client Side */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // Here, we throw an error, passing the response properties we want
    throw new Error(
      JSON.stringify({ status: error.status, message: error.message })
    );
  }
};

export default BookList;
