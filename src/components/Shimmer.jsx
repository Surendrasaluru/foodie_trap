import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="m-3 grid grid-cols-3 gap-3 justify-items-center">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
