import About from "../Component/About/About";
import Banner from "../Component/Banner/Banner";
import NavBer from "../Component/Navber/Navber";

const MainLayout = () => {
  return (
    <div className="px-32 py-10">
      <NavBer></NavBer>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default MainLayout;



/**echo "# my-portfolio" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/tayeb012/my-portfolio.git
  git push -u origin main */
