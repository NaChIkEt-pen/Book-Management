"use server";

import { NextResponse } from "next/server";

export async function getAllBooks() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/get-all-book`,
      {
        cache: "no-store", // Ensure no caching for fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error Fetching books", error);
    return NextResponse.error("Internal Server errr", 500);
  }
}

export async function deleteBook(bookId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/delete-book/${bookId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to delete book. Status: ${response.status}, ${
          errorText || "Unknown error"
        }`
      );
    }

    //   return NextResponse.json({ message: "Book deleted successfully" });
    return { success: true, message: "Book deleted successfully" }; // Return a plain object, not NextResponse
  } catch (error) {
    console.error("Error deleting book:", error);
    const err = new Error("Failed to delete book. " + error.message);
    err.status = 500; // Custom property
    throw err;
  }
}
