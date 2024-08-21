import React, { useEffect, useState } from "react";
import SectionTile from "../SectionTitle/SectionTile";
import Category from "../Category/Category";

const title = "Job Category";
const description =
  "Explore thousands of job opportunities with all the information you need. It's your future.";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <SectionTile title={title} description={description} />
      <div className="flex space-x-6 justify-center items-center mt-8">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
