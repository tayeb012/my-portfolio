import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const myImage = `https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg`;

  const handleDownload = () => {
    const resumeUrl =
      "https://word-edit.officeapps.live.com/we/WordViewer/request.pdf?WOPIsrc=https%3A%2F%2Fwopi%2Eonedrive%2Ecom%2Fwopi%2Ffiles%2F5CFB00FC9CC244D0%211243&access_token=4wZDpOlkAsVaxaXKfN02G0PI_wR_3rMiCkm9LEtON19uOrmtzELypES-BFccUMKN_KiVz-2yvIdmWOBX_9G6er2ZNpwo7xIKTNGzLxCwDULPqMqSvPqCnRs40u4uUn0MAKRRlqTjLQD_8YfEG1D7xoqa7mhXvja9Sk8sWcloZEd3KOQYqGacxGhoNCRX69oYlLiRnEtNRGx5LnTKQ2Y-G5eTFFVAjaDaA9pa2KAZNv8HGTaKUcVGX06o3lchVoLdSl9V0wzMbWMhLxwWcvipfRoFGTIWgDFfI6rz-sZavZQHZKCDDdxtgQKDha2MVIuZXXWYr7F0DxQW1-3kUJZNDm51foMooSaBGmjHihq-8Rmgd2sSreIoTFEOoWQiPWMyInf3OxR09pyk_uUlMqPsIi7RrqRm4SoSDgVApzwlHkqd4pgUWL3dek54zBtcDBIy_D5h5GC-xknVtJpfWDVWmOouee4z4IuO5FJc4QdTapjMTfimKFuGqZ__xeMqICvetp&access_token_ttl=1704908932794&type=printpdf&rndm=a8d7a332-a2cf-45e1-847a-8b2d2be6d38b&useNamedAction=1"; // Replace with the actual path to your resume file
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
          <h3 className="text-2xl sm:text-3xl text-[#0e0e0e9c]">
            Junior Web Developer
          </h3>
          <section className="flex gap-4">
            <button
              onClick={handleDownload}
              className="btn hover:border-slate-700 rounded-full border-black hover:bg-slate-700 hover:text-white"
            >
              Download Resume
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
