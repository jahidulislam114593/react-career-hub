import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobApplication } from "../Utility/localStorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getSavedJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center py-8">Applied Jobs</h2>
      </div>
      {displayJobs.length > 0 && (
        <div className="flex justify-end">
          <details className="dropdown">
            <summary className="btn m-1 text-white">Filter</summary>
            <ul className="menu dropdown-content bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
      )}
      {displayJobs.length > 0 ? (
        displayJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))
      ) : (
        <p className="text-center py-8">No jobs applied.</p>
      )}
    </div>
  );
};

export default AppliedJobs;
