import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // this not Recomanded for large data
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"), // this not Recomanded for large data
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
