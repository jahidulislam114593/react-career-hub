import React from "react";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md border hover:shadow-lg transition-all duration-200 bg-[#F4F4FF] w-[250px] h-[250px]">
      <div className="flex items-center justify-center w-16 h-16 rounded-lg mb-4 bg-[#7E90FE]">
        <img src={logo} alt={category_name} className="w-10 h-10" />
      </div>
      <h2 className="text-lg font-extrabold" style={{ fontSize: "20px" }}>
        {category_name}
      </h2>
      <p
        className="text-sm text-gray-500 font-medium"
        style={{ fontSize: "16px" }}
      >
        {availability}
      </p>
    </div>
  );
};

export default Category;
