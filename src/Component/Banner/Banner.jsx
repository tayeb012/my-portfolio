import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  return (
    <div className="py-32 ">
      <div className="flex items-center justify-center">
        <section className=" flex justify-center items-center ">
          <img
            className="rounded-full h-3/5 w-3/5"
            src={myImage}
            alt="myImage"
          />
        </section>
        <section className="font-semibold flex flex-col gap-6 items-center justify-center text-center">
          <h4 className="text-lg text-[#0e0e0e9c]">Hey, This is</h4>
          <h2 className="text-5xl">Tayeb Hossan</h2>
          <h3 className="text-3xl text-[#0e0e0e9c]">Frontend Developer</h3>
          <section className="flex gap-4">
            <button className="btn hover:border-slate-700 rounded-full border-black hover:bg-slate-700 hover:text-white">
              Download CV
            </button>
            <button className="btn rounded-full hover:bg-black bg-slate-700 border-none text-white">
              Contact Info
            </button>
          </section>
          <section className="flex gap-4 text-5xl">
            <FaGithubSquare />
            <Link
              to={`https://www.instagram.com/____repulsion____/`}
              target="_blank"
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
