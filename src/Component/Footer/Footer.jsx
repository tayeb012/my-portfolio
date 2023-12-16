import { Footer } from "flowbite-react";
import { Links } from "../Navber/Navber";

const Footers = () => {
  return (
    <div className="mt-10">
      <Footer container>
        <Footer.Copyright href="#" by="Tayeb Hossan™" year={2022} />
        <Footer.LinkGroup className="justify-center">
          <ul className="flex flex-wrap gap-4 lg:gap-6 xl:gap-10">{Links}</ul>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footers;
