import React from "react";

const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="mx-auto text-center mt-3 md:w-3/12">
      <p className="t text-yellow-400">{subheading}</p>
      <h1 className="uppercase text-2xl border-y-2 py-4">---{heading}---</h1>
    </div>
  );
};

export default SectionTitle;
