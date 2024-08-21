import React from "react";

const SectionTile = ({ title, description }) => {
  return (
    <div className="items-center justify-center text-center my-10">
      <h2 className="text-5xl font-extrabold py-4">{title}</h2>
      <p className="text-gray-600 text-sm pb-4">{description}</p>
    </div>
  );
};

export default SectionTile;
