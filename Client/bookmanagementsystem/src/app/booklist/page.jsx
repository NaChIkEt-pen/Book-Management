import React from "react";
import BookList from "../components/Booklist/BookList";
import NavBar from "../components/NavBar";

const BookListPage = () => {
  return (
    <div>
      <NavBar />
      <header className="mt-10">
        <h1 className="text-center text-3xl font-bold mb-8">Books</h1>
      </header>
      <BookList />
      <footer className="mt-16"></footer>
    </div>
  );
};

export default BookListPage;
