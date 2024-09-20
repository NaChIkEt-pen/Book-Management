"use client";
import React, { useState } from "react";
import * as Toast from "@radix-ui/react-toast";

const DeleteBookButton = ({ bookId }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/delete-data/book/${bookId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Open the toast notification when successful
        setOpen(true);
        // Reload the page after 2 seconds, giving time for the user to read the toast
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete Book</button>

      {/* Toast notification */}
      <Toast.Provider>
        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Title>Book Deleted</Toast.Title>
          <Toast.Description>
            The book has been successfully deleted.
          </Toast.Description>
          <Toast.Action asChild altText="Close">
            <button>Close</button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
};

export default DeleteBookButton;
