import React from "react";

export const Links = (
  <>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#mySkill">My Skill</a>
    </li>
    <li>
      <a href="#project">Project</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </>
);
const Navber = () => {
  return (
    <div className="flex justify-between text-4xl">
      <h2>Portfolio</h2>
      <section>
        <ul className="flex gap-10">{Links}</ul>
      </section>
    </div>
  );
};

export default Navber;
