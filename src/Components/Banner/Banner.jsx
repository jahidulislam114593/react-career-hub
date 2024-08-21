import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-50 flex flex-col md:flex-row justify-between items-center h-screen py-16 px-8 md:px-24">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900">
          One Step <br /> Closer To Your <br />
          <span className="text-indigo-500">Dream Job</span>
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Explore thousands of job opportunities with all the information you
          need. It’s your future. Come find it. Manage all your job applications
          from start to finish.
        </p>
        <button className="mt-8 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="../../assets/images/user.png"
          alt=""
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
