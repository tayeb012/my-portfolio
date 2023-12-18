import About from "../Component/About/About";
import Banner from "../Component/Banner/Banner";
import Contact from "../Component/Contact/Contact";
import Education from "../Component/Education/Education";
import Experience from "../Component/Experience/Experience";
import Footers from "../Component/Footer/Footer";
import Novo from "../Component/Novo/Novo";
import Projects from "../Component/Projects/Projects";

const MainLayout = () => {
  return (
    <div className="lg:px-28 md:px-16 sm:px-12 px-6 sm:py-10 py-6">
      <Novo></Novo>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Education></Education>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
