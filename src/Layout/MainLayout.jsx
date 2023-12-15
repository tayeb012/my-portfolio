
import About from "../Component/About/About";
import Banner from "../Component/Banner/Banner";
import Contact from "../Component/Contact/Contact";
import Experience from "../Component/Experience/Experience";
import Footers from "../Component/Footer/Footer";
import Navber from "../Component/Navber/Navber";
import Projects from "../Component/Projects/Projects";

const MainLayout = () => {
  return (
    <div className="px-32 py-10">
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
