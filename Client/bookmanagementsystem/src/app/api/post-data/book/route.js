import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKENDURL}:${process.env.NEXT_PUBLIC_BACKENDPORT}/book/post-book`,
      {
        method: "POST",
        body: formData,
      }
    );

    // Check if the response is not OK (status code not in the 200-299 range)
    if (!response.ok) {
      const errorText = await response.text(); // Capture any text response from the backend
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
      return NextResponse.json(
        {
          error: `Failed to post book: ${errorText || "Unknown error"}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error posting book:", error); // Logs the full error message and stack trace for debugging

    // Return a detailed error message with more context
    return NextResponse.json(
      {
        error:
          "An error occurred while posting the book. Please check the logs for more details.",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
