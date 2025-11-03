import React from "react";

const UniversityCardSkeleton = () => {
  return (
    <div className="animate-pulse p-4 border rounded-xl bg-white">
      <div className="w-full h-15 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default UniversityCardSkeleton;
