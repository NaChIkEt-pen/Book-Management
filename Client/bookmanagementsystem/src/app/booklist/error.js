"use client";

export default function Error({ error}) {

  // Parse the error if it contains a JSON string
  let errorDetails;
  try {
    errorDetails = JSON.parse(error.message);
  } catch (e) {
      errorDetails = {
        status: error.status || "Unknown",
        message:
          error.message || "An unknown error occurred. Please try again later.",
      };
  }

  const handleReset = () => {
    window.location.reload(); // Reload the entire page
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-5">
      <h1 className="text-4xl font-bold">Error Loading Book List</h1>
      <p className="text-lg font-semibold">Status: {errorDetails.status}</p>
      <p className="text-lg font-semibold">{errorDetails.message}</p>

      {/* Custom behavior for status: 0 (Server connection problems) */}
      {errorDetails.status === 0 && (
        <p className="font-semibold text-lg text-red-500">
          It seems there is a problem reaching the server. Server down or
          connection broke. Please check the connection.
        </p>
      )}

      {/* Option to reload the page */}
      <button
        onClick={handleReset}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Reload page
      </button>
    </div>
  );
}
