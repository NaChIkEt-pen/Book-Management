"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Toast from "@radix-ui/react-toast";

const DeleteBookButton = ({ bookId }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // Use Next.js router

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/delete-data/book/${bookId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Open the toast notification when successful
        setOpen(true);

        // Refresh the page (with the new content) after a few seconds
        setTimeout(() => {
          router.refresh();
        }, 2000);
      } else {
        throw new Error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
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
