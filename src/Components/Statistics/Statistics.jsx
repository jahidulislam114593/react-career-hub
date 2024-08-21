import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Statistics = () => {
  return (
    <div className="bg-white">
      <Banner />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Statistics;
