import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-100">
      <div className="w-8/12 h-[50vh] bg-base-300 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default Loading;
