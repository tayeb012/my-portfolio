import { Footer } from "flowbite-react";

const Footers = () => {
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
    <div className="mt-10">
      <Footer container>
        <Footer.Copyright href="#" by="Tayeb Hossan™" year={2022} />
        <Footer.LinkGroup className="justify-center">
          <ul className="flex flex-wrap gap-4 lg:gap-6 xl:gap-10">{links}</ul>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footers;
