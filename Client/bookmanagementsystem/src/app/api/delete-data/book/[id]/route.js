import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params; // Extract book ID from the URL
  try {
    // Call the backend to delete the book by ID
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/delete-book/${id}`,
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

    return NextResponse.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    return NextResponse.json(
      { error: "Failed to delete book. " + error.message },
      { status: 500 }
    );
  }
}
