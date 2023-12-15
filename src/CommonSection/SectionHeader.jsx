import React from "react";

const SectionHeader = ({ subTittle, tittle }) => {
  return (
    <div>
      <section className="my-32 text-center">
        <h5>{subTittle}</h5>
        <h2 className="text-5xl font-semibold">{tittle}</h2>
      </section>
    </div>
  );
};

export default SectionHeader;
