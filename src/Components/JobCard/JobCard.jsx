import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;

  return (
    <div className="card bg-white shadow-md border border-gray-200 rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-4">
          <img src={logo} alt={`${company_name} Logo`} className="h-8 mr-3" />
        </div>
        <h2 className="text-2xl font-semibold">{job_title}</h2>
        <p className="text-gray-600 mb-4">{company_name}</p>
        <div className="flex gap-3 mb-4">
          <button className="border rounded border-[#7E90FE] text-[#7E90FE] px-5 py-2">
            {remote_or_onsite}
          </button>
          <button className="border rounded border-[#7E90FE] text-[#7E90FE] px-5 py-2">
            {job_type}
          </button>
          {/* <span className="badge badge-outline badge-primary">
            {remote_or_onsite}
          </span>
          <span className="badge badge-outline badge-primary">{job_type}</span> */}
        </div>
        <div className="text-gray-500 mb-6">
          <p>
            <span>📍 {location}</span>
          </p>
          <p>
            <span>💰 Salary: {salary}</span>
          </p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary w-full">View Details</button>
      </Link>
    </div>
  );
};

export default JobCard;
