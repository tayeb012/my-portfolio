import React from "react";

const NavBer = () => {
  const Links = (
    <>
      <li id="about">About</li>
      <li id="portfolio">Project</li>
      <li id="skill">Skill</li>
      <li id="contact">Contact</li>
    </>
  );
  return (
    <div className="flex justify-between text-4xl">
      <h2>Portfolio</h2>
      <section>
        <ul className="flex gap-10">{Links}</ul>
      </section>
    </div>
  );
};

export default NavBer;

// git remote add origin https://github.com/tayeb012/contest-craft.git
