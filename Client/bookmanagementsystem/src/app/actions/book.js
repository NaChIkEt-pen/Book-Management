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
      const errorResponse = await response.json();

      // Check if the error response has an 'error' or 'message' field
      const errorMessage =
        errorResponse.error ||
        errorResponse.message ||
        "Unknown error occurred";

      throw { status: response.status, message: errorMessage };
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    // log the error details for developers
    console.error("Caught error:", error);

    // Handle network-related issues (TypeError) separately
    if (error instanceof TypeError) {
      // Log specific network-related issues
      console.error("Network error:", error.message);

      // Throw a custom error for user-facing purposes
      throw { status: 0, message: "Network error: Unable to fetch books." };
    }

    // If we caught an error we threw earlier (with a status and message), pass it along
    if (error.status && error.message) {
      throw { status: error.status, message: error.message };
    }

    // Fallback for unknown errors (unexpected issues)
    throw { status: 500, message: "Internal Server Error" };

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
    return { status: 200, message: "Book deleted successfully" };
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}

export async function postBook(formData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/share-book`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error sharing book:", error);
    return NextResponse.error("Internal Server error", 500);
  }
}
