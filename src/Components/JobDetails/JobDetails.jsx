import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job.id);

  const handleApplyNow = () => {
    saveJobApplication(idInt);
    toast("Applied Successfull");
  };

  return (
    <div className="py-40">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-3">
          <p className="pb-10 text-[#757575]">
            <span className="font-extrabold text-black">Job Description: </span>
            {job.job_description}
          </p>
          <p className="pb-10 text-[#757575]">
            <span className="font-extrabold text-black">
              Job Responsibility:{" "}
            </span>
            {job.job_responsibility}
          </p>
          <p className="pb-10 text-[#757575]">
            <span className="font-extrabold text-black">
              Educational Requirement:{" "}
            </span>
            {job.educational_requirements}
          </p>
          <p className="pb-10 text-[#757575]">
            <span className="font-extrabold text-black">Experience: </span>
            {job.experiences}
          </p>
        </div>
        <div className=" bg-[#7E90FE] bg-opacity-10 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-extrabold mb-4 border-b-2">
            Job Details
          </h3>
          <p className="pb-4">
            <span className="font-extrabold">Salary :</span> {job.salary} (Per
            Month)
          </p>
          <p className="pb-4">
            <span className="font-extrabold">Job Title :</span> {job.job_title}
          </p>
          <h3 className="text-xl font-extrabold mb-4 border-b-2 ">
            Contact Information
          </h3>
          <p className="pb-2 pt-2">
            <span className="font-extrabold">Phone :</span>{" "}
            {job.contact_information.phone}
          </p>
          <p className="pb-2">
            <span className="font-extrabold">Email :</span>{" "}
            {job.contact_information.email}
          </p>
          <p className="pb-6">
            <span className="font-extrabold">Address :</span>{" "}
            {job.contact_information.address}
          </p>
          <button
            onClick={handleApplyNow}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
