import React from "react";

const AppliedJobsDetails = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div className="border rounded-lg p-6 flex items-center space-x-6 bg-white shadow-md mt-5">
      {/* Logo Section */}
      <div className="">
        <img className="w-full" src={logo} alt={`${company_name} logo`} />
      </div>

      {/* Job Info Section */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{job_title}</h2>
        <p className="text-gray-600">{company_name}</p>
        <div className="flex space-x-3 my-2">
          <span className="bg-blue-100 text-blue-600 py-1 px-2 rounded">
            {remote_or_onsite}
          </span>
          <span className="bg-blue-100 text-blue-600 py-1 px-2 rounded">
            {job_type}
          </span>
        </div>
        <div className="flex space-x-6 text-gray-600">
          <p>📍 {location}</p>
          <p>💼 Salary: {salary}</p>
        </div>
      </div>

      {/* View Details Button */}
      <div>
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;
