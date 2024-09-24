"use server";

import { revalidatePath } from "next/cache";
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

    // revalidatePath("/booklist");

  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}
