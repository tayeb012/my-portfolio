import React from "react";
import SectionHeader from "../../CommonSection/SectionHeader";
import Acquisition from "../../CommonSection/Acquisition";

const Experience = () => {
  return (
    <div id="mySkill">
      <SectionHeader subTittle={`Explore`} tittle={`My Skill`}></SectionHeader>
      <section className="flex gap-10">
        <div className="border w-full p-10 border-black flex gap-2 flex-col justify-center items-center text-3xl rounded-badge">
          <h2>Frontend Development</h2>
          <div className="mt-5 flex justify-center gap-8 flex-wrap">
            <Acquisition
              tittle={`HTML`}
              subTittle={`Experienced`}
            ></Acquisition>
            <Acquisition tittle={`CSS`} subTittle={`Experienced`}></Acquisition>
            <Acquisition
              tittle={`Tailwind`}
              subTittle={`Experienced`}
            ></Acquisition>
            <Acquisition
              tittle={`JavaScript`}
              subTittle={`Basic`}
            ></Acquisition>
            <Acquisition tittle={`ViteJS`} subTittle={`Basic`}></Acquisition>
            <Acquisition tittle={`React`} subTittle={`Basic`}></Acquisition>
            <Acquisition
              tittle={`Firebase`}
              subTittle={`Intermediate`}
            ></Acquisition>
          </div>
        </div>

        <div className="border w-full p-10 border-black flex gap-2 flex-col justify-center items-center text-3xl rounded-badge">
          <h2>Backend Development</h2>
          <div className="mt-5 flex justify-center gap-8 flex-wrap">
            <Acquisition tittle={`Node JS`} subTittle={`Basic`}></Acquisition>
            <Acquisition
              tittle={`Express JS`}
              subTittle={`Basic`}
            ></Acquisition>
            <Acquisition tittle={`JWT`} subTittle={`Basic`}></Acquisition>
            <Acquisition
              tittle={`MongoDB`}
              subTittle={`Intermediate`}
            ></Acquisition>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
