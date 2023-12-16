import React from "react";

const SectionHeader = ({ subTittle, tittle }) => {
  return (
    <div>
      <section className="my-8 sm:my-16 md:my-24 lg:my-32 text-center">
        <h5>{subTittle}</h5>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {tittle}
        </h2>
      </section>
    </div>
  );
};

export default SectionHeader;
