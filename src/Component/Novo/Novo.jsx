import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

const Novo = () => {
  const [clops, setClops] = useState(false);
  const links = (
    <>
      <li className="hover:text-[#C99976]">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-[#C99976]">
        <a href="#mySkill">My Skill</a>
      </li>
      <li className="hover:text-[#C99976]">
        <a href="#project">Project</a>
      </li>
      <li className="hover:text-[#C99976]">
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="flex justify-between xl:text-4xl md:text-2xl">
      <h2 className="text-2xl md:text-3xl lg:text-5xl">Portfolio</h2>
      <section className="">
        <div className="md:hidden text-2xl" onClick={() => setClops(!clops)}>
          <FaRegWindowClose
            className={` transition-transform duration-1000 ${
              !clops && "hidden"
            }`}
          />
          <IoReorderThreeOutline
            className={` transition-transform duration-1000 ${
              clops && "hidden"
            }`}
          />
        </div>
        <ul className=" relative md:hidden text-right flex flex-col lg:gap-10 ">
          <span
            className={`glass p-2 absolute transform ${
              clops ? "-translate-x-20" : "-translate-x-[40rem]"
            } transition-transform duration-1000`}
          >
            {links}
          </span>
        </ul>
        <ul className="hidden  md:flex  lg:gap-5 xl:gap-10 md:gap-2">
          {links}
        </ul>
      </section>
    </div>
  );
};

export default Novo;
