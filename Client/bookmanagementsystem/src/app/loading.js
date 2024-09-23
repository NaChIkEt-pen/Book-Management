import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-20">
      <span className="loading loading-spinner loading-2xl w-24 h-24"></span>
      <p className="text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
