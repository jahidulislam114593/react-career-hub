import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  //   const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-lg text-white-800 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      {/* <button
        // onClick={() => navigate(-1)}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </button> */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
