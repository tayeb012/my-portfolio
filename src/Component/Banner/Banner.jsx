import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  const handleDownload = () => {
    const resumeUrl =
      "https://cdn.fbsbx.com/v/t59.2708-21/411024448_375297624938827_2397820206314469439_n.pdf/Tayeb-Hossan-Resume.pdf?_nc_cat=102&ccb=1-7&_nc_sid=2b0e22&_nc_eui2=AeEQtPOh0udU524ynVAK69pA-reV-UxbEwb6t5X5TFsTBiVLy26emxCHook7eYg9nqFvD4CXeAZnTHoWWZODUPc6&_nc_ohc=4etoI26gKesAX_4aSbv&_nc_ht=cdn.fbsbx.com&oh=03_AdTAqy_rX6onCZROThK_gVehDL2oSIzhjpNF_av6395tsA&oe=657DEE25&dl=1"; // Replace with the actual path to your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "tayeb_hossan_resume.pdf"; // You can customize the downloaded file name
    link.click();
  };

  return (
    <div className="py-10 sm:py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <section className=" flex justify-center items-center ">
          <img
            className="rounded-full h-3/5 w-3/5"
            src={myImage}
            alt="myImage"
          />
        </section>
        <section className="font-semibold flex flex-col gap-2 sm:gap-6 items-center justify-center text-center">
          <h4 className="text-lg text-[#0e0e0e9c]">Hey, This is</h4>
          <h2 className="text-3xl sm:text-5xl">Tayeb Hossan</h2>
          <h3 className="text-2xl sm:text-3xl text-[#0e0e0e9c]">Frontend Developer</h3>
          <section className="flex gap-4">
            <button
              onClick={handleDownload}
              className="btn hover:border-slate-700 rounded-full border-black hover:bg-slate-700 hover:text-white"
            >
              Download CV
            </button>
          </section>
          <section className="flex gap-4 text-5xl">
            <Link
              to={`https://github.com/tayeb012`}
              target="_blank"
              className="hover:scale-105"
            >
              <FaGithubSquare />
            </Link>
            <Link
              to={`https://www.instagram.com/____repulsion____/`}
              target="_blank"
              className="hover:scale-105"
            >
              <FaInstagramSquare />
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Banner;
