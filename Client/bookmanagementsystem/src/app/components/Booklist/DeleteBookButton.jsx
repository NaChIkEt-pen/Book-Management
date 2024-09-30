"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Toast from "@radix-ui/react-toast";
import { deleteBook } from "../../actions/book";

const DeleteBookButton = ({ bookId }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // Use Next.js router

  const handleDelete = async () => {
    // Call the deleteBook function from the actions
    const response = await deleteBook(bookId);
    console.log("Delete book with ID:", bookId);
    console.log(response.status);

    // Show the toast notification
    setOpen(true);

    // Refresh the page (with the new content) after a few seconds
    setTimeout(() => {
      router.refresh();
    }, 2000);

  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Book</button>
      {/* Toast notification */}
      <Toast.Provider>
        <Toast.Root
          open={open}
          className="bg-red-500 text-white p-4 mb-4 rounded-md shadow-2xl"
        >
          <Toast.Title className="text-xl font-bold">Book Deleted</Toast.Title>
          <Toast.Description className="text-sm">
            The book has been successfully deleted.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </div>
  );
};

export default DeleteBookButton;
