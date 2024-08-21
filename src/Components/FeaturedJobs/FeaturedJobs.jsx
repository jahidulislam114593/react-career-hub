import React, { useEffect, useState } from "react";
import SectionTile from "../SectionTitle/SectionTile";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const title = "Featured Jobs";
  const description =
    "Explore thousands of job opportunities with all the information you need. It's your future.";

  const [jobItem, setJobItem] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobItem(data));
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedJobs = showAll ? jobItem : jobItem.slice(0, 4);

  return (
    <div className="container mx-auto px-4 pb-20">
      <SectionTile title={title} description={description} />
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        {displayedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center mt-20">
        <button onClick={handleShowAll} className="btn btn-primary">
          {showAll ? "Show Less" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
